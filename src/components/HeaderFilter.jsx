import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// array de opções
const optionsToRender = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function HeaderFilter() {
  // ESTADO DOS INPUTS CONFORME MENTORIA DO BRADOCK
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  // contexto
  const { handleChange, activeFilters, setActiveFilters } = useContext(PlanetsContext);

  // função para criar os options de acordo com validação se está em uso ou nao.

  const columnsAfterFilter = activeFilters.map((filter) => filter.column);

  const renderOptions = (item, index) => {
    const validation = columnsAfterFilter.some((filter) => filter === item);
    // console.log(validation);
    if (!validation) {
      return (<option key={ index } value={ item }>{item}</option>);
    }
  };
  // console.log(activeFilters);
  return (
    <>
      <section>
        <label htmlFor="input-text">
          { 'Search: '}
          <input
            id="input-text"
            data-testid="name-filter"
            type="text"
            onChange={ ({ target }) => handleChange(target.value) }
            placeholder="search planet by name"
          />
        </label>
      </section>
      <form>
        <select
          data-testid="column-filter"
          value={ selected.column }
          onChange={ (e) => setSelected({ ...selected, column: e.target.value }) }
        >
          { optionsToRender.map((item, index) => (renderOptions(item, index))) }
        </select>
        {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select> */}
        <select
          data-testid="comparison-filter"
          value={ selected.comparison }
          onChange={ (e) => setSelected({ ...selected, comparison: e.target.value }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setSelected({ ...selected, value: e.target.value }) }
          value={ selected.value }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setActiveFilters([...activeFilters, selected]);
            setSelected({
              column: 'population',
              comparison: 'maior que',
              value: '0',
            });
          } }
        >
          Filtrar

        </button>
        { activeFilters.map((filter, index) => (
          <div
            data-testid="filter"
            className="filter-container"
            key={ index }
          >
            <button
              type="button"
              className="limpar"
              onClick={ () => {
                const newFilters = [...activeFilters];
                newFilters.splice(index, 1);
                setActiveFilters(newFilters);
              } }
            >
              <i>X</i>
              {/* {`deletar filtro ${filter.column}`} */}
            </button>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </div>
        ))}
        { // solução do mentoria do bradock para criar botao filtro e remove-lo.
        }
        { activeFilters.length > 0
          ? (
            <button
              type="button"
              data-testid="button-remove-filters"
              onClick={ () => {
                setActiveFilters([]);
              } }
            >
              LIMPAR FILTROS
              {' '}

            </button>
          )
          : (null) }
      </form>
    </>
  );
}

export default HeaderFilter;
