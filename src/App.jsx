import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext.js';
import Recetas from './components/Recetas';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className='container'>
            <Formulario />
            <Recetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
