import React from 'react'
import { Contacto } from './Contacto.class'
import ComponenteB from './ComponenteB'


const ComponenteA = () => {

    const defaultContacto = new Contacto('Juan', 'Perez', 'juanperez@gmail.com', false)

   

  return (
    <div>
        <div>
            <h2>Contacto</h2>
        </div>
        <ComponenteB Contacto={defaultContacto}></ComponenteB>
    </div>
  )
}



export default ComponenteA