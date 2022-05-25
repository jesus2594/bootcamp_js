import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

import '../../styles/task.scss'


const ContactComponent = ({ contact, conect, remove }) => {

    useEffect(() => {
      console.log('Created contact')
    
      return () => {
        console.log(`Contact: ${contact.id} is going to unmount`);
      }
    }, [contact])

    

    function contactConectedIcon(){
      if(contact.conected){
        return (<i onClick={() => conect(contact)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
      }else{
        return (<i onClick={() => conect(contact)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
      }
    }
    

  return (

      <tr className='fw-normal'>
          <th>
            <span className='ms-2'>{contact.id}</span>
          </th>
          <td className='align-middle'>
            <span>{contact.name}</span>
          </td>
          <td className='align-middle'>
            <span>{contact.phone}</span>
          </td>
          <td className='align-middle'>
            {/* sustituir por iconos */}
            { contactConectedIcon()  }
              <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
          </td>
      </tr>
   
  );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    conect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ContactComponent;
