import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    rut: '',
    licitacion: '',
    contacto: '',
    correo: '',
    telefonoContacto: '+569',
    direccion: '',
    tipo: '',
    estado: '',
    monto: '',
    inicio: '',
    fin: '',
    notas: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/contratos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          empresa: '',
          rut: '',
          licitacion: '',
          contacto: '',
          correo: '',
          telefono: '+569',
          direccion: '',
          tipo: '',
          estado: '',
          monto: '',
          inicio: '',
          fin: '',
          notas: ''
        });
        alert('Contrato agregado exitosamente');
      } else {
        throw new Error('Error al agregar contrato');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al agregar contrato');
    }
  };

  return (
    <section className='containerForm'>
      <div className='divForm'>
        <div className='formulario container-fluid '>
          <form className="row g-3" onSubmit={handleSubmit}>
            <h2 className='text-center'> Nuevo Contrato</h2>
            <div className="col-md-4">
              <label htmlFor="">Razón Social</label>
              <input
                placeholder='Nombre empresa'
                type="text"
                className="form-control"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Rut</label>
              <input
                placeholder='xxxxxxxx-x'
                type="text"
                className="form-control"
                name="rut"
                value={formData.rut}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Licitación</label>
              <input
                placeholder='N° licitación'
                type="text"
                className="form-control"
                name="licitacion"
                value={formData.licitacion}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Contacto</label>
              <input
                placeholder='Nombre y Apellido'
                type="text"
                className="form-control"
                name="contacto"
                value={formData.contacto}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Correo Contacto</label>
              <input
                placeholder='xxxx@xx.com'
                type="text"
                className="form-control"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Telefono Contacto</label>
              <input
                type="text"
                className="form-control"
                name="telefono"
                defaultValue="+569"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Dirección</label>
              <input
                placeholder='Ubicación de la empresa'
                type="text"
                className="form-control"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Tipo Contrato</label>
              <select
                className="form-select"
                name="tipo"
                value={formData.tipo}
                onChange={handleInputChange}
              >
                <option value="">Seleccionar</option>
                <option value="Compra">Compra</option>
                <option value="Arriendo">Arriendo</option>
                <option value="Venta">Venta</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="">Estado Contrato</label>
              <select
                className="form-select"
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}        >
                <option value="">Seleccionar</option>
                <option value="Activo">Activo</option>
                <option value="En Revisión">En Revisión</option>
                <option value="Rechazado">Rechazado</option>
                <option value="Ter,ino">Termino</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="">Monto</label>
              <input
                placeholder='$'
                type="text"
                className="form-control"
                name="monto"
                value={formData.monto}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Inicio Contrato</label>
              <input
                placeholder='Año-Mes-Día'
                type="date"
                className="form-control"
                name="inicio"
                value={formData.inicio}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Fin Contrato</label>
              <input
                placeholder='Año-Mes-Día'
                type="date"
                className="form-control"
                name="fin"
                value={formData.fin}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Observación</label>
              <textarea
                placeholder='Ingresar notas referente al contrato'
                className="form-control"
                name="notas"
                value={formData.notas}
                onChange={handleInputChange}
                rows="3"
                maxLength="500"
              />
              <small className="text-muted">Máximo 100 caracteres</small>
            </div>
            <div className='col-md-4 align-content-center ms-2'>
              <button className='btn btn-primary'>Guardar</button>
              <Link to="/">
                <button className='btn btn-danger ms-2'> Volver</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
