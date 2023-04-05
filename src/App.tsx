import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import { ButtonLang } from './components/buttonLang';
import { Contato } from './pages/Contato';
import { CV } from './pages/CV';
import { Experiencia } from './pages/Experiencia';
import { Habilidades } from './pages/Habilidades';
import { Home } from './pages/Home'
import { Projetos } from './pages/Projetos';
import { Sobre } from './pages/Sobre';
import { useLanguage } from './hooks/useLanguage'
import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// Adicionar animacoes na entrada de cada pagina
// Mudar Scroll
// Cuidar da responsividade
// Analisar a criacao de componentes
// ButtonHTMLAtributtes como props, ver alguma forma de utilizar isso na aplicacao
// Arrumar as cores
// Ver se em algum momento irei precisar de usar o useState/useEffect/Contexts (Provavelmente nao)
// Add componente que muda idioma dos textos para ingles (chamar atencao de recrutadores gringos)
function App() {
  const {handleChangeLanguage} = useLanguage() 

  return (
      <BrowserRouter>
        <Navbar />
        {/* <ButtonLang variant="outline-primary" size="sm" onClick={handleChangeLanguage}>Mudar Idioma</ButtonLang> */}
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
