import { useState } from 'react';
import './AlumnoCard.css';

const AlumnoCard = ({ nombre, carrera, estadoInicial }) => {
  const [estado, setEstado] = useState(estadoInicial);
  // Extra: estado para eliminar (ocultar) la tarjeta
  const [visible, setVisible] = useState(true);
  // Extra: estado para marcar la tarjeta como seleccionada
  const [seleccionado, setSeleccionado] = useState(false);

  const badgeColor =
    estado === 'Matriculado' ? 'bg-success' : 'bg-secondary';

  // Iniciales para el avatar (ej. "Daniel Puccio" -> "DP")
  const iniciales = nombre
    .split(' ')
    .map((palabra) => palabra[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const cambiarEstado = () => {
    if (estado === 'Matriculado') {
      setEstado('Inactivo');
    } else {
      setEstado('Matriculado');
    }
  };

  const eliminarAlumno = () => {
    if (window.confirm(`¿Eliminar a ${nombre}?`)) {
      setVisible(false);
    }
  };

  // Si el alumno fue eliminado, no se dibuja la tarjeta
  if (!visible) {
    return null;
  }

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div
        className={`card alumno-card shadow-sm h-100 ${seleccionado ? 'seleccionada' : ''}`}
      >
        <div className="card-body p-4">
          <div className="d-flex align-items-center gap-3">
            <div className="alumno-avatar">{iniciales}</div>
            <div>
              <h5 className="card-title mb-1">{nombre}</h5>
              <h6 className="card-subtitle text-muted small">
                <i className="fas fa-book-open me-1"></i>
                {carrera}
              </h6>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span className={`badge ${badgeColor}`}>
              <i
                className={`fas ${estado === 'Matriculado' ? 'fa-circle-check' : 'fa-circle-pause'} me-1`}
              ></i>
              {estado}
            </span>

            <div>
              <button
                className="btn btn-sm btn-outline-info me-2"
                onClick={cambiarEstado}
              >
                <i className="fas fa-arrows-rotate me-1"></i>
                Cambiar Estado
              </button>

              <button
                className="btn btn-sm btn-outline-danger"
                onClick={eliminarAlumno}
              >
                <i className="fas fa-trash me-1"></i>
                Eliminar
              </button>
            </div>
          </div>

          {/* Extra: botón para seleccionar / quitar selección */}
          <button
            className={`btn btn-sm w-100 mt-3 ${seleccionado ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSeleccionado(!seleccionado)}
          >
            {seleccionado ? 'Seleccionado ✓' : 'Seleccionar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumnoCard;
