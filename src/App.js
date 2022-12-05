import logo from './logo.svg';
import './App.css';
import Contacto from './components/ContactoComponent';

function App() {

  const cont = {
    nombre: "Manu",
    apellido: "Volpe",
    email: 'manu@manu.com',
    conectado: false
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Contacto contacto={cont}/>
      </main>
    </div>
  );
}

export default App;
