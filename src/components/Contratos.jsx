import React from 'react';

const Contratos = ({ contratos }) => {
  return (
    <ul>
      {contratos.map(contrato => (
        <li key={contrato.id}>
          <p>Nombre de Empresa: {contrato.nombre_de_empresa}</p>
          <p>Monto: {contrato.monto}</p>
          <p>Inicio de Contrato: {contrato.inicio_contrato}</p>
          <p>Fin de Contrato: {contrato.fin_contrato}</p>
        </li>
      ))}
    </ul>
  );
}

export default Contratos;
