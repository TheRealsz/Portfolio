import { Container, Row, Col } from "react-bootstrap"
import Particle from "../components/Particle"
import Typewriter from 'typewriter-effect'
import { useNavigate } from "react-router-dom"
import mainHome from '../assets/mainHome.png'
import { ButtonNav } from "../components/ButtonNav"
import '../styles/home.scss'
import { useLanguage } from "../hooks/useLanguage"


export function Home(){
    const {translate} = useLanguage() 

    const navigate = useNavigate()

    function navigateTo (url : string){
        navigate(url)
    }

    return(
        <section>
            <Container fluid id="defaultContainer">
                <Particle/>
                <Container className="main-content-home">
                    <Row className="mainRowHome">
                        <Col md={7} className="left-content">
                            <div className="text-content">
                                <h1>Ola, sou <span className="name_span">Robson Diego</span>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                translate("Desenvolvedor Front-End."),
                                                "Desenvolvedor Web.",
                                                "Tecnico em informatica."
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 25,
                                            delay: 50,
                                        }}  
                                    />
                                </h1>
                            </div>
                            <ButtonNav variant="outline-primary" onClick={() => navigateTo('/Sobre')} size="lg">Saiba mais</ButtonNav>      
                        </Col>
                        <Col md={5}>
                            <img src={mainHome} alt="" className="photoHome"/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

