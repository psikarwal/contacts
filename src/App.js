import React, { Component } from 'react';
import ListContacts from './ListContacts'
import { connect } from 'react-redux'
import { addContact } from '../src/actions/index'

class App extends Component {
  state = {
      show: false,
    contacts: this.props.contacts
    //     {
    //         "id": "andrew",
    //         "name": "Andrew Amernante",
    //         "rating": "3",
    //         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvho44NZ_732vzMWYuCm58ERNVV8e99SbkrEuo4fzEdk4UIb1",
    //         "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
    //         "Likes": [
    //             "Dogs",
    //             "Long walks on the beach",
    //             "Chopin",
    //             "Tacos"
    //         ],
    //         "Dislikes": [
    //             "Birds",
    //             "Red things",
    //             "Danish food",
    //             "Dead Batteries"
    //   ]
    //       },
    //       {
    //         "id": "frank",
    //         "name": "Frank Wang",
    //         "rating": "5",
    //         "img": "http://dashflows.com/wp-content/uploads/sample/2014/07/people-img6.jpg",
    //         "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
    //         "Likes": [
    //           "Frank",
    //           "Manchester United",
    //           "Football",
    //           "Programming"
    //         ],
    //         "Dislikes": [
    //           "Dogs",
    //           "Long walks on the beach",
    //           "Chopin",
    //           "Tacos"
    //         ]
    //       },
    //       {
    //         "id": "tyler",
    //         "name": "Tyler McGinnis",
    //         "rating": "5",
    //         "img": "http://findyournaturalvoice.com/wp-content/uploads/sample/2014/07/people-img10.jpg",
    //         "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems.",
    //         "Likes": [
    //             "Cats",
    //             "the beach",
    //             "Chopin",
    //             "Blue things"
    //         ],
    //         "Dislikes": [
    //             "Birds"
    //         ]
    //       },
    //       {
              
    //         "id": "diego",
    //         "name": "Diego Garcia",
    //         "rating": 2,
    //         "img": "https://media.bizj.us/view/img/10884778/kathyhabluetzel*166xx2250-3000-75-0.jpg",
    //         "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad.",
    //         "Likes": [
    //           "Talking Spanish",
    //           "Spanish food",
    //           "Spanish things",
    //           "Football"
    //         ],
    //         "Dislikes": [
    //           "Not talking spanish",
    //           "Chopin"
    //         ]
    //       },
    //       {
    //         "id": "zuck",
    //         "name": "Mark Zuckerberg",
    //         "rating": 4,
    //         "img": "https://i.redd.it/3a4cmf4eax401.jpg",
    //         "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
    //         "Likes": [
    //           "Dogs",
    //           "Long walks on the beach",
    //           "Chopin",
    //           "Tacos"
    //         ],
    //         "Dislikes": [
    //           "Birds",
    //           "Red things",
    //           "Danish food",
    //           "Dead Batteries"
    //         ]
    //       }
    // ]
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    //ContactsAPI.remove(contact)
  }

  

  render() {
    // const createContact(contact) {
    //   //ContactsAPI.create(contact).then(contact => {
    //     console.log(114,contact)
    //     // this.setState(state => ({
    //     //   contacts: state.contacts.concat([ contact ])
    //     // }))
  
    //     this.props.addThisContact(contact)
    //     console.log(120,contact)
    //   //})
    // }
    console.log(121, this.props)
    console.log(126, this.state.contacts)
    return (
      <div>
        
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
            show={this.state.show}
            onCreateContact={(contact) => {this.props.addThisContact(contact)}}
          />
        
        
          
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return contact= {state};
// }

const mapStateToProps = (state) => ({ contacts: state })

const mapDispatchToProps = (dispatch) => ({
  addThisContact: (data) => dispatch(addContact(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
