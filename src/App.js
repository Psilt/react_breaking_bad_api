import React,{useState,useEffect} from 'react';
import Frase from './Components/Frase'


function App() {

const [frase,setFrase]= useState({})


const consultar_api= async ()=>{
  const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const resultado= await api.json();
  setFrase(resultado[0])
}

useEffect(()=>{
consultar_api()

},[])

  return (  
      <div className="contenedor">
        <Frase frase={frase}></Frase>
        <button
        className='button'
        onClick={consultar_api}
        >
          Obtener frase 
        </button>
      
      </div>
    
  );
}

export default App;
