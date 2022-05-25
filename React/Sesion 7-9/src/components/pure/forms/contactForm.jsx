import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class'

const ContactForm = ({add}) => {

  const idRef = useRef(0)
  const nameRef = useRef('')
  const phoneRef = useRef('')
  

  function addContact(e){
    e.preventDefault();
    const newContact = new Contact(
      idRef.current.value,
      nameRef.current.value,
      phoneRef.current.value,
      false,
    );
    add(newContact);
  }

  return (
    <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
      <div className="form-outline flex-fill align-items-center" >
          <input ref={idRef} id='inputId' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact id' />
          <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required placeholder='Contact name' />
          <input ref={phoneRef} id='inputPhone' type='text' className='form-control form-control-lg' required placeholder='Contact phone' />
          
          
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
    </form>
  )
}

ContactForm.propTypes = {
  add: PropTypes.func.isRequired
}

export default ContactForm