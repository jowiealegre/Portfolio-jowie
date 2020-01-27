import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DATOS PERSONALES</h1>
        <DatosPersonales/>
        </header>
</div>
  );
}

class DatosPersonales extends React.Component {
  render (){
    return (
      <div>
        <ul >
          <li>Nombre: Jowie</li>
          <br></br>
          <li>Apeliido: Alegre</li>
          <br></br>
          <li>Telefono: 11-3459-0361</li>
          <br></br>
        </ul>
      
        <form>
         <label>
        Nombre:
     <input type="text" name="nombre"/>
        </label>
        <br></br>
<label>
Apellido:
<input type="text" name="nombre"/>
</label>
<br></br>
<label>
Télefono:
<input type="text" name="nombre"/>
</label>
<br></br>
<input type="submit" name="enviar"/>
</form>

      </div>
    )
  }
}



export default App;
