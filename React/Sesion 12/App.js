// import logo from './logo.svg';
import './App.css';
import Cuadrado from './components/container/Cuadrado';


//import ComponenteA from './components/ComponenteA';
//import Ejemplo from './hooks/Ejemplo';
//import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
//import Ejemplo4 from './hooks/Ejemplo4';

// import TaskListComponent from './components/container/task_list';
// import ContactListComponent from './components/container/contactList';
// import GreetingStyled from './components/pure/GreetingStyled';
// import Father from './components/container/father';
// import OptionalRender from './components/pure/optionalRender';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* <ComponenteA></ComponenteA> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/*  <Ejemplo4 nombre="martin"> */}
          {/* todo lo que hay aqui, es tratado  como props.children */}
          {/* <h3>  Contenido del children </h3> */}
     {/*    </Ejemplo4> */} 
     {/* <TaskListComponent></TaskListComponent> */}
     {/* <OptionalRender></OptionalRender> */}
     <Cuadrado></Cuadrado>
     {/* <ContactListComponent></ContactListComponent> */}
     {/* <GreetingStyled name="Jesus"></GreetingStyled> */}
      {/* </header> */}
      {/* <Father></Father> */}
    </div>
  );
}

export default App;
