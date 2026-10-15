import { useState } from 'react';
import './Contador.css';

const Contador = () => {
  const [numero, setNumero] = useState(0);

  return (
    <div className="card contador-card shadow-sm p-4 text-center mt-2 mb-5">
      <h4>
        <i className="fas fa-users text-primary me-2"></i>
        Alumnos seleccionados:
      </h4>
      <div className="contador-numero my-3">{numero}</div>

      <div className="mt-2">
        <button
          className="btn btn-danger m-1"
          onClick={() => setNumero(numero - 1)}
          disabled={numero === 0}
        >
          <i className="fas fa-minus me-1"></i>
          Restar
        </button>

        <button
          className="btn btn-success m-1"
          onClick={() => setNumero(numero + 1)}
        >
          <i className="fas fa-plus me-1"></i>
          Sumar
        </button>

        {/* Extra: reinicia el estado a su valor inicial */}
        <button
          className="btn btn-secondary m-1"
          onClick={() => setNumero(0)}
        >
          <i className="fas fa-rotate-left me-1"></i>
          Reiniciar
        </button>
      </div>

      {/* Extra: mensaje que cambia según el estado */}
      <p className="text-muted mt-3 mb-0">
        {numero === 0
          ? 'Aún no hay alumnos seleccionados.'
          : `Has seleccionado ${numero} alumno${numero === 1 ? '' : 's'}.`}
      </p>
    </div>
  );
};

export default Contador;
