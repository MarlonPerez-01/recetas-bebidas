import React, { createContext, useEffect, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [busqueda, setBusqueda] = useState({ ingrediente: '', categoria: '' });
  const [recetas, setRecetas] = useState([]);
  const [consultar, setConsultar] = useState(false);

  useEffect(() => {
    if (consultar) {
      const obtenerReceta = async () => {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.ingrediente}&c=${busqueda.categoria}`
        );
        const datos = await response.json();
        setRecetas(datos.drinks);
      };

      obtenerReceta();
    }
  }, [busqueda, consultar]);

  return (
    <RecetasContext.Provider value={{ recetas, setBusqueda, setConsultar }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
