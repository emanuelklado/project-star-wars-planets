import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import requestAPI from '../services/requestAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsFiltredByName, setPlanetsFiltredByName] = useState({ filterByName: {
    name: '',
  } });

  // setando o estado com o conteudo que foi digitado
  const handleChange = (name) => {
    setPlanetsFiltredByName({
      filterByName: {
        name,
      },
    });
  };

  useEffect(() => {
    async function getPlanets() {
      const data = await requestAPI();
      setPlanets(data.results);
    }
    getPlanets();
  }, []);

  // meu conteudo a ser compartilhado
  const contentShared = {
    planets,
    handleChange,
    planetsFiltredByName,
  };

  return (
    <PlanetsContext.Provider value={ contentShared }>
      {children}
    </PlanetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
