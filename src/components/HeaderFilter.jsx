import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function HeaderFilter() {
  const { handleChange } = useContext(PlanetsContext);
  return (
    <section>
      <label htmlFor="input-text">
        <input
          id="input-text"
          data-testid="name-filter"
          type="text"
          onChange={ ({ target }) => handleChange(target.value) }
        />
      </label>
    </section>
  );
}

export default HeaderFilter;
