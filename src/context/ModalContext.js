import React, { createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState(null);
  const [bebida, setBebida] = useState({});
  const [consultar, setConsultar] = useState(false);

  useEffect(() => {
    if (consultar) {
      const obtenerReceta = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`);
        const datos = await response.json();
        setBebida(datos.drinks[0]);
      };

      obtenerReceta(idReceta);
      setConsultar(false);
    }
  }, [consultar, idReceta]);

  return (
    <ModalContext.Provider value={{ bebida, setIdReceta, setConsultar, setBebida }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
