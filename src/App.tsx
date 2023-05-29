import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import { Contato } from './pages/Contato';
import { CV } from './pages/CV';
import { Experiencia } from './pages/Experiencia';
import { Habilidades } from './pages/Habilidades';
import { Home } from './pages/Home'
import { Projetos } from './pages/Projetos';
import { Sobre } from './pages/Sobre';
import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollTop';


// Nao digite as coisas em maiusculo - acessibilidade
// Descobrir como colocar alt nos icones de svg
// Usar as ferramentas de inspecionar codigo para pegar feedbacks
// Adicionar animacoes na entrada de cada pagina
// Responsividade
// Responsividade Mobile
// Analisar a criacao de componentes
// ButtonHTMLAtributtes como props, ver alguma forma de utilizar isso na aplicacao
// Arrumar as cores com base em outros Pc's
// Ver se em algum momento irei precisar de usar o useState/useEffect/Contexts (Provavelmente nao)
// Tentar utilizar framer-motion em todas as paginas/componentes/interaçoes
// Utilizar framer motion nos componentes
// Pensar em alguma forma de juntar os botoes e setar as config na hora de add o component

function App() {

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
        <Route path="/CV" element={<CV />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
