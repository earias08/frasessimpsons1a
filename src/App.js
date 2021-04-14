import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Frase from './components/Frase';
import {useState, useEffect} from 'react';

function App() {
  // crear el state
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    // aqui escribo la logica
    consultarAPI();
  }, []);

  const consultarAPI = async() =>{
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      console.log(respuesta);
  }

  return (
   <section className='container my-5 d-flex flex-column align-items-center'>
     <img src={process.env.PUBLIC_URL+'logo.png'} alt="logo simpsons" className='w-75 my-4'/>
     <Button variant="warning">Obtener frase</Button>
     <Frase></Frase>
   </section>
  );
}

export default App;
