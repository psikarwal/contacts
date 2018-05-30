import React, { Component } from 'react';
import Modal, {closeStyle} from 'simple-react-modal'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import CreateContact from './CreateContact.js'
//import ShowDetails from './ShowDetails.js'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: '',
    show: false,
    clicked: ''
  }

  show(){
    this.setState({show: true})
  }
 
  close(){
    this.setState({show: false})
  }

  stateApp = this.props.state
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  onClicks = (event) => {
    this.setState({clicked: event.target.id})
  }

  render() {
    const { contacts, onDeleteContact, onCreateContact } = this.props
    const { query } = this.state
    console.log(45, contacts)
    let showingContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          
          <div onClick={this.show.bind(this)}
            className='add-contact'
          >Add Contact</div>
          <Modal show={this.state.show} onClose={this.close} transitionSpeed={1000}>
        
          <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
          <div><CreateContact onClose={this.close.bind(this)} onCreateContact={(contact) => {onCreateContact(contact)}}/></div>
          </Modal>
          
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
        <div >
        <ol className='contact-list' style={{float: 'left', width: '45%'}}>
          {showingContacts.map((contact) => (
            <li  key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.img})`
              }}/>
              <div className='contact-details'>
              <button id ={contact.id}style ={{background:'white', border: '0px', textAlign: 'left', cursor: 'pointer', padding:'0', margin: '0'}}  onClick={(contact) => this.onClicks(contact)}>{contact.name}</button>
                <p>{contact.rating}</p>
              </div>
              <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
                Remove
              </button>
            </li>
          ))}
        </ol>
          <div style={{border: '1px solid #d5d8df', borderRadius: '4px', float: 'right', width: '45%', margin: '20px', padding: '20px', background: 'white'}}>
          <h2>{JSON.stringify(contacts.filter(contact => contact.id === this.state.clicked)[0])}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default ListContacts
