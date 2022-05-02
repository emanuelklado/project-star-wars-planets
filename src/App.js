import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import HeaderFilter from './components/HeaderFilter';
import GoToTop from './components/GoToTop';
import Footer from './components/Footer';

function App() {
  return (
    <PlanetsProvider>
      <HeaderFilter />
      <Table />
      <GoToTop />
      <Footer />
    </PlanetsProvider>
  );
}

export default App;
