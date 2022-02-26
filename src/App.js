import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import ListadoNoticias from './Componentes/ListadiNoticias';
function App() {

  //definir la categoria y noticias

  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticia] = useState([])

  useEffect(() => {

    const consultarApi = async () => {

      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=0878f7edeb4d458888131de7bcfd0b82`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      guardarNoticia(noticias.articles)
    }
    consultarApi()
  }, [categoria])

  return (
    <div>
      <div>

        <Header
          titulo='Buscador de Noticias'
        />

      </div>
      <div className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>

    </div >
  );
}

export default App;
