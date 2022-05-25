import React, { useEffect, useState } from 'react'

import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'


import '../../styles/task.scss'
import ContactForm from '../pure/forms/contactForm'

const ContactListComponent = () => {

  const defaultContact1 = new Contact(1,'Juan', '45697', true)
  const defaultContact2 = new Contact(2,'Alberto', '8521', false)
  const defaultContact3 = new Contact(3,'Rodrigo', '44771', false)

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3])
    const [loading, setLoading] = useState(true)

    //control del ciclo de vida del componente
    useEffect(() => {
      console.log('Contact State has been modified')
      setLoading(false)
      return () => {
        console.log('ContactList component is going to unmount');
      }
    }, [contacts])
    
    function conectContact(contact){
      console.log('Complete this Contact:', contact)
      const index = contacts.indexOf(contact)
      const tempContacts = [...contacts]
      tempContacts[index].conected = !tempContacts[index].conected
      // we update the state of the component and it will update the
      // iteration of the contacts in order to show the contact updated
      setContacts(tempContacts)
    }

    function deleteContact(contact){
      console.log('Delete this Contact:', contact)
      const index = contacts.indexOf(contact)
      const tempContacts = [...contacts]
      tempContacts.splice(index, 1)
      setContacts(tempContacts)
    }

    function addContact(contact){
      console.log('Add this Contact:', contact)
      const index = contacts.indexOf(contact)
      const tempContacts = [...contacts]
      tempContacts.push(contact)
      setContacts(tempContacts)
    }

  return (
    <div>
        <div className='col-12'>
            <div className='card'>
                {/* Card Header {title} */}
                <div className="card-header p-3">
                  <h5>
                    Your Contacts:
                  </h5>
                </div>
                {/* Card Body */}
                <div className="card-body" data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                  <table>
                    <thead>
                      <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>State</th>
                      </tr>
                    </thead>
                    <tbody>
                      { contacts.map((contact, index) => {
                        return(
                          <ContactComponent 
                            key={index} 
                            contact={contact}
                            conect={conectContact}
                            remove = {deleteContact}
                            >

                          </ContactComponent>
                        )
                      })}
                        
                    </tbody>
                  </table>
                </div>
            </div>     
        </div>
        <ContactForm add={addContact}></ContactForm>
    </div>
  )
}



export default ContactListComponent