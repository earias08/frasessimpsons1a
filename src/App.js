import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  // crear el state
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    // aqui escribo la logica
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setCargando(true);
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const resultado = await respuesta.json();
    console.log(resultado[0]);
    // guardar los datos en el state
    setTimeout(()=>{
      setPersonaje(resultado[0]);
      setCargando(false);
    }, 3000)
  };

  // (condicion logica)?(lo que quiero que haga si es true la condicion logica):(lo que quiero que suceda si es false la condicion logica)
 const mostrarComponente = (cargando === true)?(<Spinner></Spinner>):(<Frase personaje={personaje}></Frase>)

  return (
    <section className="container my-5 d-flex flex-column align-items-center">
      <img
        src={process.env.PUBLIC_URL + "logo.png"}
        alt="logo simpsons"
        className="w-75 my-4"
      />
      <Button variant="warning" onClick={() => consultarAPI()} className='mb-5'>
        Obtener frase
      </Button>
{
  mostrarComponente
}
    </section>
  );
}

export default App;
