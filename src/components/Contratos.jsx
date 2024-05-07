import React, { useState } from "react";
import Details from "./Details";
import { GiMagnifyingGlass } from "react-icons/gi";
import { Link } from "react-router-dom";

const Contratos = ({ contratos }) => {
  const [detalleContrato, setDetalleContrato] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const mostrarDetalles = (contrato) => {
    setDetalleContrato(contrato);
  };

  return (
    <section className="todo">
      <div className="contrato-list">
        <input
          type="text"
          placeholder="Buscar"
          value={busqueda}
          className=""
          
        />
         <Link to="/form" className="btn btn-success ms-3">
            Agregar
          </Link>
        <table className="mt-3 table table-hover table-bordered table-responsive table-striped text-center">
          <thead>
            <tr>
              <th>RAZÓN SOCIAL</th>
              <th>RUT</th>
              <th>LICITACIÓN</th>
              <th>TIPO CONTRATO</th>
              <th>ESTADO</th>
              <th>DETALLES</th>
            </tr>
          </thead>
          <tbody>
            {contratos.map((contrato) => (
              <tr key={contrato.id}>
                <td>{contrato.razon_social}</td>
                <td>{contrato.rut}</td>
                <td>{contrato.licitacion}</td>
                <td>{contrato.tipo_contrato}</td>
                <td>{contrato.estado_contrato}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => mostrarDetalles(contrato)}
                  >
                    <GiMagnifyingGlass className="icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {detalleContrato && (
        <Details
          detalleContrato={detalleContrato}
          setDetalleContrato={setDetalleContrato}
        />
      )}
    </section>
  );
};

export default Contratos;
