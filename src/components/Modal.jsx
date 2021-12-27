import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Modal = () => {
  const { bebida } = useContext(ModalContext);

  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={`strIngredient${i}`}>
            {informacion[`strIngredient${i}`]}
            {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

  return (
    <div
      className='modal fade'
      id='modalReceta'
      role='dialog'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              {bebida.strDrink}
            </h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <div className='card'>
              <img src={bebida.strDrinkThumb} className='card-img-top' alt={bebida.strDrink} />
              <div className='card-body'>
                <h5 className='card-title'>Instrucciones</h5>
                <p className='card-text'>{bebida.strInstructions}</p>
                <h5 className='card-title'>Ingredientes</h5>
                <ul>{mostrarIngredientes(bebida)}</ul>
              </div>
            </div>
          </div>
          <div className='modal-footer p-0 '>
            <button type='button' className='btn btn-dark w-100 m-0' data-bs-dismiss='modal'>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
