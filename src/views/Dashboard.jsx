import React, { useEffect, useState } from 'react';
import Licitaciones from '../components/Licitaciones';

const Dashboard = () => { 
  const [licitaciones, setLicitaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/licitaciones");
        const licitacionesData = await response.json();
        setLicitaciones(licitacionesData);
      } catch (error) {
        console.error('Error al obtener los contratos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Contratos</h1>
      <Licitaciones licitaciones={licitaciones} />
    </div>
  );
}

export default Dashboard;
