import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import Particle from './components/Particle';
import {Contato} from './pages/Contato';
import {CV} from './pages/CV';
import {Experiencia} from './pages/Experiencia';
import {Habilidades} from './pages/Habilidades';
import {Home} from './pages/Home'
import {Projetos} from './pages/Projetos';
import {Sobre} from './pages/Sobre';
import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Particle/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sobre" element={<Sobre/>} />
        <Route path="/Habilidades" element={<Habilidades/>} />
        <Route path="/Projetos" element={<Projetos/>} />
        <Route path="/Experiencia" element={<Experiencia/>} />
        <Route path="/CV" element={<CV/>} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
