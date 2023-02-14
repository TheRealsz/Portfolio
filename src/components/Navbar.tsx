import Container from "react-bootstrap/Container"
import { useState } from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

// Arrumar o hover dele, para quando tiver .show no responsivo, nao ficar uma barra azul gigante
// Fazer com que identifique que pagina estou e daixar o hover ativado

function NavBar(){

    const [navColor, setNavColor] = useState(false)
    const [iconToggler, setIconToggler] = useState(true)
    
    function scrollChanger(){
        if(window.scrollY > 30) {
            setNavColor(true)
        }
        else {
            setNavColor(false)
        }
    }

    window.addEventListener("scroll", scrollChanger)

    function changeIconToggler(){
        if(iconToggler == true) {
            setIconToggler(false)
        }
        else{
            setIconToggler(true)
        }
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
                            <Nav.Link as={Link} to="/Sobre">Sobre</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Habilidades">Habilidades</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Projetos">Projetos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Experiencia">Experiencia</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/CV">CV</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/Contato">Contato</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar