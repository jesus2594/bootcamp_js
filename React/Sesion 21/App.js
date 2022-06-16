// import logo from './logo.svg';

import './App.css';
import CardContainer from './components/Card';
// import AxiosExample from './components/pure/AxiosExample';
// import AsyncExample from './components/pure/AsyncExample';
// import FetchExample from './components/pure/FetchExample';
// import Loginformik from './components/pure/forms/loginFormik';
// import ObservableExample from './components/pure/forms/ObservableExample';
// import Registerformik from './components/pure/forms/registerFormik';
// import Cuadrado from './components/container/Cuadrado';


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
     {/* <Cuadrado></Cuadrado> */}
     {/* <ContactListComponent></ContactListComponent> */}
     {/* <GreetingStyled name="Jesus"></GreetingStyled> */}
      {/* </header> */}
      {/* <Father></Father> */}
      {/* <Loginformik></Loginformik> */}
      {/* <Registerformik></Registerformik> */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample></AxiosExample> */}
      <CardContainer></CardContainer>
    </div>
  );
}

export default App;
