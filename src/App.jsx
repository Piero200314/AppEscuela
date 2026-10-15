import Contador from './components/Contador/Contador';
import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="page-header mb-3">
          <h2 className="mb-1">Directorio de Alumnos</h2>
          <p className="mb-0">
            Gestiona el estado de matrícula de los estudiantes.
          </p>
        </div>

        <div className="row">
          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Luis Ramirez"
            carrera="Mecatrónica Industrial"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Ana Torres"
            carrera="Ingeniería de Software"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Pedro Sanchez"
            carrera="Mecánica Automotriz"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Lucia Fernandez"
            carrera="Redes y Seguridad Informática"
            estadoInicial="Matriculado"
          />

          <AlumnoCard
            nombre="Jorge Castillo"
            carrera="Electricidad Industrial"
            estadoInicial="Inactivo"
          />

          <AlumnoCard
            nombre="Sofia Vargas"
            carrera="Diseño y Desarrollo Web"
            estadoInicial="Matriculado"
          />
        </div>

        <Contador />
      </div>
    </>
  );
}

export default App;