import React, { Component } from 'react';
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onCreateContact){
      values.id = Date.now()
      this.props.onCreateContact(values)
      console.log(values)
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.props.onClose} className='close-create-contact'>Close</div>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput
            className='create-contact-avatar-input'
            name='img'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name'/>
            <input type='text' name='rating' placeholder='Rating'/>
            <input type='text' name='Description' placeholder='Description'/>
            <input type='text' name='Likes' placeholder='Likes'/>
            <input type='text' name='Dislikes' placeholder='Dislikes'/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact
