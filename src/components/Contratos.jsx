import React, { useState, useEffect } from "react";
import { errorToast,successToast } from "../utils/toast.js";
import Details from "./Details";
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contratos = ({ contratos }) => {
  const [detalleContrato, setDetalleContrato] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [contratosActualizados, setContratosActualizados] = useState([]);

  useEffect(() => {
    setContratosActualizados(contratos);
  }, [contratos]);

  const mostrarDetalles = (contrato) => {
    setDetalleContrato(contrato);
  };

  const eliminarContrato = async (id) => {
    try {
      await fetch(`http://localhost:3000/contratos/${id}`, {
        method: "DELETE"
      });
      successToast('Contrato Eliminado')
      actualizarContratos();
    } catch (error) {
      errorToast('No se pudo eliminar contrato')
      console.error("Error al eliminar contrato:", error);
    }
  };

  const actualizarContratos = async () => {
    try {
      const response = await fetch("http://localhost:3000/contratos");
      const data = await response.json();
      setContratosActualizados(data);
    } catch (error) {
      console.error("Error al actualizar contratos:", error);
    }
  };

  return (
    <section className="todo container-fluid ">
      <div className="contrato-list container-fluid ">
        <input
          type="text"
          placeholder="Buscar"
          value={busqueda}
          className=""
        />
        <Link to="/form" className="btn btn-success ms-3">
          AGREGAR
        </Link>
        <table className="mt-3 table table-hover table-bordered table-responsive table-striped text-center">
          <thead>
            <tr>
              <th>N°</th>
              <th>RAZÓN SOCIAL</th>
              <th>RUT</th>
              <th>LICITACIÓN</th>
              <th>TIPO CONTRATO</th>
              <th>ESTADO</th>
              <th>DETALLES</th>
              <th>OBSERVACIONES</th>
            </tr>
          </thead>
          <tbody>
            {contratosActualizados.map((contrato) => (
              <tr key={contrato.id}>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminarContrato(contrato.id)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>{contrato.empresa}</td>
                <td>{contrato.rut}</td>
                <td>{contrato.licitacion}</td>
                <td>{contrato.tipo}</td>
                <td>{contrato.estado}</td>
                <td>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => mostrarDetalles(contrato)}
                  >
                    <GiMagnifyingGlass className="icon" />
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline-success">
                    <BsPencilSquare className="icon" />
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
