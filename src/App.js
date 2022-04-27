import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import HeaderFilter from './components/HeaderFilter';

function App() {
  return (
    <PlanetsProvider>
      <HeaderFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
