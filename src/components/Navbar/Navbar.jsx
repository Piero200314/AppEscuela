const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary shadow-sm mb-4">
            <div className="container">
                <span className="navbar-brand mb-0 h1">
                    <i className="fas fa-graduation-cap me-2"></i>
                    Sistema de Matrícula - SENATI
                </span>
                    <button className="btn btn-outline-light btn-sm">
                        Cerrar Sesión
                    </button>
                </div>
        </nav>
    );
};

export default Navbar;