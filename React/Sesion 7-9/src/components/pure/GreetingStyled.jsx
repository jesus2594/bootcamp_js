import React, { useState } from 'react'

//Definiendo estilos enconstantes:

const loggedStyle = {
    color: 'blue'
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //Generamos un estado para el componente  y asi controlar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false)

   
  return (
    <div style={ logged ? loggedStyle : unloggedStyle }>
        {   logged ?
            (<p>Hola, {props.name}</p>)
            :
            (<p>Please login</p>)
            
        }
        <button onClick={()=> {
            console.log('Boton pulsado')
            setLogged(!logged)
        }}>
            {logged ? 'Logout' : 'Login'}
        </button>
    </div>
  )
}

export default GreetingStyled