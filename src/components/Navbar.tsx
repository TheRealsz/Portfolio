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
                    <Nav className="ms-auto" defaultActiveKey={"/"}>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" eventKey={"/"}>{t("Inicio")}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Sobre" eventKey={"/Sobre"}>{t('Sobre')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Habilidades" eventKey={"/Habilidades"}>{t('Habilidades')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Projetos" eventKey={"/Projetos"}>{t('Projetos')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Experiencia" eventKey={"/Experiencia"}>{t('Experiencia')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Contato" eventKey={"/Contato"}>{t('Contato')}</Nav.Link>
                        </Nav.Item>
                        <ButtonLng/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar