import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import requestAPI from '../services/requestAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getPlanets() {
      const data = await requestAPI();
      setPlanets(data.results);
    }
    getPlanets();
  }, []);

  const contentShared = {
    planets,
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
