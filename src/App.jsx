
import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          {/* 3. Reutilizamos el componente AlumnoCard pasándole Props diferentes */}

          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Luis Ramirez"
            carrera="Mecatrónica Industrial"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Ana Torres"
            carrera="Ingeniería de Software"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Pedro Sanchez"
            carrera="Mecánica Automotriz"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Lucia Fernandez"
            carrera="Redes y Seguridad Informática"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Jorge Castillo"
            carrera="Electricidad Industrial"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Sofia Vargas"
            carrera="Diseño y Desarrollo Web"
            estado="Matriculado"
          />
        </div>
      </div>
    </>
  );
}

export default App;
