import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function GoToTop() {
  return (
    <>
      <div className="logo-topo">
        <a className="icon-topo" href="#logo">
          <FaArrowCircleUp />
        </a>
      </div>
      <div>
        <h3 className="texto-to-top">Filtros</h3>
      </div>
    </>

  );
}

export default GoToTop;
