import { useState } from 'react';

const AlumnoCard = ({ nombre, carrera, estadoInicial }) => {
  const [estado, setEstado] = useState(estadoInicial);

  const badgeColor =
    estado === 'Matriculado' ? 'bg-success' : 'bg-secondary';

  const cambiarEstado = () => {
    if (estado === 'Matriculado') {
      setEstado('Inactivo');
    } else {
      setEstado('Matriculado');
    }
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">{nombre}</h5>

          <h6 className="card-subtitle mb-2 text-muted">
            {carrera}
          </h6>

          <hr />

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span className={`badge ${badgeColor}`}>
              {estado}
            </span>

            <div>
              <button
                className="btn btn-sm btn-outline-info me-2"
                onClick={cambiarEstado}
              >
                Cambiar Estado
              </button>

              <button className="btn btn-sm btn-outline-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumnoCard;