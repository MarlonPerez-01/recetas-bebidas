import React, { createContext, useEffect, useState } from 'react';

//Creando el context
export const CategoriasContext = createContext();

//Provider, aqui se encuentran las funciones y state
const CategoriasProvider = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const datos = await response.json();
      setCategorias(datos.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias, setCategorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
