     <p>Nombre de Empresa: {contrato.empresa}</p>
              <p>N° Licitación: {contrato.licitacion}</p>
              <p>Monto: {contrato.monto.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
              <p>Inicio de Contrato: {contrato.inicio_contrato}</p>
              <p>Fin de Contrato: {contrato.fin_contrato}</p>
              <p>Observación: {contrato.comentario}</p>