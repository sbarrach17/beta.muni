-- Crear la base de datos
CREATE DATABASE proyecto;

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    rut VARCHAR(20) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (rut, nombre, contrasena) VALUES
('18977172-k', 'Sebastian Barra', '123456');


-- Crear la tabla de contratos
CREATE TABLE contratos (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    nombre_de_empresa VARCHAR(100) NOT NULL,
    monto INT NOT NULL, -- Cambio de tipo de datos a INTEGER
    inicio_contrato DATE NOT NULL,
    fin_contrato DATE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
INSERT INTO contratos (usuario_id, nombre_de_empresa, monto, inicio_contrato, fin_contrato)
VALUES
    (2, 'Claro', 1500, '2024-01-01', '2024-12-31');
    

