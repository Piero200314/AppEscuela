import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    // Extra: estado de la sesión (conectado / desconectado)
    const [sesionActiva, setSesionActiva] = useState(true);

    return (
        <nav className="navbar navbar-dark navbar-escuela shadow mb-4">
            <div className="container">
                <span className="navbar-brand mb-0 h1 d-flex align-items-center">
                    <span className="logo-icono me-2">
                        <i className="fas fa-graduation-cap"></i>
                    </span>
                    Sistema de Matrícula - SENATI
                </span>
                <div className="d-flex align-items-center gap-3">
                    <span className="usuario d-none d-sm-flex">
                        <span
                            className={`punto ${sesionActiva ? 'bg-success' : 'bg-secondary'}`}
                        ></span>
                        {sesionActiva ? 'Bienvenido, Administrador' : 'Sesión cerrada'}
                    </span>
                    <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => setSesionActiva(!sesionActiva)}
                    >
                        <i
                            className={`fas ${sesionActiva ? 'fa-right-from-bracket' : 'fa-right-to-bracket'} me-1`}
                        ></i>
                        {sesionActiva ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
