import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import { Contato } from './pages/Contato';
import { Experiencia } from './pages/Experiencia';
import { Habilidades } from './pages/Habilidades';
import { Home } from './pages/Home'
import { Projetos } from './pages/Projetos';
import { Sobre } from './pages/Sobre';
import ScrollToTop from './components/ScrollTop';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


// Tentar traduzir as msg dos toasts e dos placeholders
// Descobrir como traduzir alts de svg

// Url e direcionamento

// Usar as ferramentas de inspecionar codigo para pegar feedbacks
// feedbacks gerais
// Tirar dependencias que nao usa

function App() {

  
  AOS.init()

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Habilidades" element={<Habilidades />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Experiencia" element={<Experiencia />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
