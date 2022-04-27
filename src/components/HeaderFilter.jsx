import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function HeaderFilter() {
  // ESTADO DOS INPUTS CONFORME MENTORIA DO BRADOCK
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  // contexto
  const { handleChange, activeFilters, setActiveFilters } = useContext(PlanetsContext);

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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
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
              column: '',
              comparison: '',
              value: '',
            });
          } }
        >
          Filtrar

        </button>
      </form>
    </>
  );
}

export default HeaderFilter;
