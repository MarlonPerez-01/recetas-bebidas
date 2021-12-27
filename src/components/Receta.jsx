import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../context/ModalContext';
import Modal from './Modal';

const Receta = ({ receta }) => {
  const { setIdReceta, setConsultar, setBebida } = useContext(ModalContext);

  const mostrarReceta = () => {
    setBebida({}); //evita que al cargar el modal renderice estado previo
    setIdReceta(receta.idDrink);
    setConsultar(true);
  };

  return (
    <>
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
        <div className='card h-100'>
          <img src={receta.strDrinkThumb} alt={receta.strDrink} className='img' />
          <div className='card-body' style={{ backgroundColor: '#f7f7f9' }}>
            <h5 className='card-title text-center'>{receta.strDrink}</h5>
          </div>
          <div className='card-footer p-0'>
            <button
              className='btn btn-dark w-100'
              type='button'
              data-toggle='modal'
              data-bs-toggle='modal'
              data-bs-target='#modalReceta'
              onClick={() => mostrarReceta()}
            >
              Ver receta
            </button>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
};

Receta.propTypes = {
  receta: PropTypes.object.isRequired,
};

export default Receta;
