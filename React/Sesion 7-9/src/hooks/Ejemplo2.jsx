import React, { useEffect, useRef, useState } from 'react'

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    //vamos a crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista HTML)
    const miRef = useRef()

    function incrementar1(){
        setContador1(contador1 + 1)
    }
    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /* 
    caso 1 Ejecutar siempre un snippet de codigo
    useEffect
    cada vex que haya un cambio en el estado del componente
    se ejecuta aquello que este dentro del useEffect()
    
   useEffect(() => {
     console.log('cambio el estado del componente');
     console.log('mostrando referencia al DOM');
     console.log(miRef);
   })
   */
  /* 
  Caso 2: Ejecutar solo cuando cambie el contador1
  cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
  en caso de cambie contador2, no habra ejecucion
  

  useEffect(() => {
    console.log('cambio el estado del contador1');
    console.log('mostrando referencia al DOM');
    console.log(miRef);
  }, [contador1])
  */
  /*Caso 3: Ejecutar solo cuando cambie el contador1 o contador2
  cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
  cada vez que haya un cambio en contador2, se ejecuta lo que diga el useEffect()
  
  */

  useEffect(() => {
    console.log('cambio el estado del contador1 o contador2');
    console.log('mostrando referencia al DOM');
    console.log(miRef);
  }, [contador1, contador2])
  
   

  return (
    <div>
        <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
        <h2>CONTADOR 1: {contador1}</h2>
        <h2>CONTADOR 2: {contador2}</h2>
        {/* Elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        {/* Botones para cambiar los contadores */}
        <div>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
       
        {/* <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button> */}
    </div>
  )
}

export default Ejemplo2