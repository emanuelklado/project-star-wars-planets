import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, planetsFiltredByName, activeFilters } = useContext(PlanetsContext);

  // função mostrada na monitoria do bradock para tratar as condições dos selected.
  const dataSelected = (line) => {
    const bools = [];
    console.log(line);
    activeFilters.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        bools.push(Number(line[filter.column]) > Number(filter.value));
        break;
      case 'menor que':
        bools.push(Number(line[filter.column]) < Number(filter.value));
        break;
      case 'igual a':
        bools.push(Number(line[filter.column]) === Number(filter.value));
        break;
      default:
        return true;
      }
    });
    // retornando cada resultado das comparações.
    return bools.every((el) => el);
  };

  const getPlanetsFiltred = () => {
    const { filterByName: { name } } = planetsFiltredByName;

    return planets.filter((item) => item.name.includes(name)).filter(dataSelected);
  };

  console.log(dataSelected(planets));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {getPlanetsFiltred().map((item, index) => (
          <tr key={ index }>
            <td>{item.name}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
            <td>{item.diameter}</td>
            <td>{item.climate}</td>
            <td>{item.gravity}</td>
            <td>{item.terrain}</td>
            <td>{item.surface_water}</td>
            <td>{item.population}</td>
            <td>{item.films}</td>
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
