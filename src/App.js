import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App! lets GO!!</span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
