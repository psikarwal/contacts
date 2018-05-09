import React, { Component } from 'react';
import Modal, {closeStyle} from 'simple-react-modal'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import CreateContact from './CreateContact.js'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: '',
    show: false
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

  render() {
    const { contacts, onDeleteContact, onCreateContact } = this.props
    const { query } = this.state

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

        <ol className='contact-list'>
          {showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.img})`
              }}/>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.rating}</p>
              </div>
              <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts
