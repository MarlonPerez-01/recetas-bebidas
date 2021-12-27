import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({ ingrediente: '', categoria: '' });

  const { categorias } = useContext(CategoriasContext);
  const { setBusqueda: setBusquedaCtx, setConsultar } = useContext(RecetasContext);

  const handleChange = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.ingrediente.trim() === '' || busqueda.categoria.trim() === '') return;
    setBusquedaCtx(busqueda);
    setConsultar(true);
  };

  return (
    <div className='row mt-5 mb-5'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className='text-center fw-bolder'>Busca bebidas por categoría o ingredientes</legend>
          <div className='row g-3'>
            <div className='col-12 col-md-4'>
              <input
                type='text'
                className='form-control'
                placeholder='Ingrediente - Ej. Tequila'
                aria-label='Ingrediente'
                onChange={handleChange}
                name='ingrediente'
                value={busqueda.ingrediente}
                required={true}
              />
            </div>
            <div className='col-12 col-md-4'>
              <select
                className='form-select'
                aria-label='Default select example'
                name='categoria'
                value={busqueda.categoria}
                onChange={handleChange}
                required={true}
              >
                <option value='' defaultValue>
                  Categoria
                </option>
                {categorias.map(({ strCategory }) => (
                  <option key={strCategory} value={strCategory}>
                    {strCategory}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-12 col-md-4'>
              <input type='submit' className='btn btn-primary w-100 bg-dark' value='buscar' />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Formulario;
