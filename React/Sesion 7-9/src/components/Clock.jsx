import React, { useEffect, useState } from 'react'
//import ‘../../styles/clock.scss’;

   const Clock = () => {

    const initialState = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     };
    
    const [state, setState] = useState(initialState)

    useEffect(() => {
       
        const timerID = setInterval (() => {
            tick();
        }, 1000)
        
        return () => {
            clearInterval (timerID);
        }
       
       })

       const tick = () =>{
        return setState({
            fecha: state.fecha,
            edad : state.edad + 1,
            nombre: state.nombre,
            apellidos: state.apellidos
        });
     }
       

       return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
     )
   }
   
   
  
  
   

export default Clock;