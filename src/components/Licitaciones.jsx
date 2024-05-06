import React from 'react';

const Licitaciones = ({ licitaciones }) => {
  return (
    <ul>
      {licitaciones.map(licitacion => (
        <li key={licitacion.id}>
          <p>Nombre de Empresa: {licitacion.nombre_de_empresa}</p>
          <p>Monto: {licitacion.monto.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
          <p>Inicio de Contrato: {licitacion.inicio_contrato}</p>
          <p>Fin de Contrato: {licitacion.fin_contrato}</p>
        </li>
      ))}
    </ul>
  );
}

export default Licitaciones;
