import Container from "react-bootstrap/Container"
import { useState } from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useTranslation } from "react-i18next"
import { ButtonLng } from './ButtonLng'


// Arrumar o hover dele, para quando tiver .show no responsivo, nao ficar uma barra azul gigante
// Fazer com que identifique que pagina estou e daixar o hover ativado
// Tirar a sombra preta que forma logo ao acionar o navbar-scrolled

function NavBar(){
    
    const {t} = useTranslation() 
    const [navColor, setNavColor] = useState(false)
    const [iconToggler, setIconToggler] = useState(true)
    
    function scrollChanger() {
        setNavColor(window.scrollY > 30);
      }

    window.addEventListener("scroll", scrollChanger)

    function changeIconToggler(){
        setIconToggler(!iconToggler)
    }

    const iconComponent = iconToggler ? <GiHamburgerMenu onClick={() => changeIconToggler()}/> : <AiOutlineClose onClick={() => changeIconToggler()}/>

    return(
        <Navbar className={navColor ? "navbar-scrolled" : "navbar"} expand="xl" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/" className="icon-nav">TheReal 😎</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">{iconComponent}</Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Sobre">{t('Sobre')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Habilidades">{t('Habilidades')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Projetos">{t('Projetos')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Experiencia">{t('Experiencia')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/CV">CV</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Contato">{t('Contato')}</Nav.Link>
                        </Nav.Item>
                        <ButtonLng/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar