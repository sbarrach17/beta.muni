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
('18977172-k', 'Andres Barra', '12'),
('11244678-2', 'Arturo Prat', '12'),
('12345678-9', 'Usuario Prueba', '123');


-- Crear la tabla de contratos
CREATE TABLE contratos (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    razon_social VARCHAR(100) NOT NULL,
    rut VARCHAR(30) NOT NULL,
    licitacion VARCHAR(100) NOT NULL,
    contacto VARCHAR(100) NOT NULL,
    correo_contacto VARCHAR(100) NOT NULL,
    telefono_contacto VARCHAR(20) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    tipo_contrato VARCHAR(50) NOT NULL,
    estado_contrato VARCHAR(50) NOT NULL,
    monto DECIMAL(15, 2) NOT NULL, 
    inicio_contrato DATE NOT NULL,
    fin_contrato DATE NOT NULL,
    notas_internas TEXT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


INSERT INTO contratos (usuario_id, razon_social, rut, licitacion, contacto, correo_contacto, telefono_contacto, direccion, tipo_contrato, estado_contrato, monto, inicio_contrato, fin_contrato, notas_internas)
VALUES (1, 'Claro', '12345678-9', 'Licitacion 001', 'Juan Perez', 'juan@example.com', '+56945678933', 'Calle Principal 123', 'Servicios', 'Activo', 5000.00, '2024-01-15', '2024-12-31', 'Contrato renovable anualmente.'),
    (2, 'Integrade', '98765432-1', 'Licitacion 002', 'Maria Garcia', 'maria@example.com', '+56976543212', 'Avenida Secundaria 456', 'Compra de productos', 'Activo', 8000.00, '2024-02-20', '2024-12-31', 'Contrato anual con posibilidad de extension.'),
 (3, 'Entel', '45678901-2', 'Licitacion 003', 'Pedro Rodriguez', 'pedro@example.com', '+56922233312', 'Plaza Central 789', 'Arrendamiento', 'Activo', 3000.00, '2024-03-10', '2024-12-31', 'Contrato mensual renovable automaticamente.'),
 (1, 'Hosting', '12345678-9', 'Licitacion 004', 'Juan Perez', 'juan@example.com', '+56945678911', 'Calle Principal 123', 'Servicios', 'En revision', 6000.00, '2024-04-05', '2024-12-31', 'Revision del alcance del contrato pendiente.'),
 (2, 'Samsung', '98765432-1', 'Licitacion 005', 'Maria Garcia', 'maria@example.com', '+56987654321', 'Avenida Secundaria 456', 'Servicios', 'Activo', 7000.00, '2024-05-01', '2024-12-31', 'Contrato de mantenimiento mensual.');




