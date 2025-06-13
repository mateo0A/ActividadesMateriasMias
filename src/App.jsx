import { useState } from 'react'
import Programacion from './Programacion'
import DisenoWeb from './DisenoWeb'
import SistemasOperativos from './SistemasOperativos'
import SoporteTecnico from './SoporteTecnico'
import Ofimatica from './Ofimatica'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [componente, setComponente] = useState('Programacion');
  const [menuOpen, setMenuOpen] = useState(false);
  let ComponenteActual;
  switch (componente) {
    case 'Programacion':
      ComponenteActual = Programacion;
      break;
    case 'DisenoWeb':
      ComponenteActual = DisenoWeb;
      break;
    case 'SistemasOperativos':
      ComponenteActual = SistemasOperativos;
      break;
    case 'SoporteTecnico':
      ComponenteActual = SoporteTecnico;
      break;
    case 'Ofimatica':
      ComponenteActual = Ofimatica;
      break;
    default:
      ComponenteActual = () => <div>Selecciona una opción</div>;
  }
  return (
    
    <div style={{ display: 'flex', height: '100vh' }}>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="bi bi-list" style={{fontSize:'2rem',color:'#fff'}}></i>
          </button>
      <nav className={`sidebar-menu${menuOpen ? ' open' : ''}`}>
        <div className="sidebar-header">
          
        </div>
        <ul className={`sidebar-list${menuOpen ? ' open' : ''}`}>
          <li><button onClick={() => {setComponente('Programacion');setMenuOpen(false);}}><i className="bi bi-code-slash"></i> <span className="menu-label">Programación</span></button></li>
          <li><button onClick={() => {setComponente('DisenoWeb');setMenuOpen(false);}}><i className="bi bi-palette"></i> <span className="menu-label">Diseño Web</span></button></li>
          <li><button onClick={() => {setComponente('SistemasOperativos');setMenuOpen(false);}}><i className="bi bi-hdd-network"></i> <span className="menu-label">Sistemas Operativos</span></button></li>
          <li><button onClick={() => {setComponente('SoporteTecnico');setMenuOpen(false);}}><i className="bi bi-tools"></i> <span className="menu-label">Soporte Técnico</span></button></li>
          <li><button onClick={() => {setComponente('Ofimatica');setMenuOpen(false);}}><i className="bi bi-file-earmark-text"></i> <span className="menu-label">Ofimática</span></button></li>
        </ul>
      </nav>
      <main className="main-content">
        <ComponenteActual />
      </main>
    </div>
  )
}

export default App
