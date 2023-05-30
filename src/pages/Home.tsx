import { Container, Row, Col } from "react-bootstrap"
import Particle from "../components/Particle"
import Typewriter from 'typewriter-effect'
import { useNavigate } from "react-router-dom"
import mainHome from '../assets/mainHome.png'
import { ButtonNav } from "../components/ButtonNav"
import { useTranslation } from "react-i18next"
import { FiDownload } from "react-icons/fi"
import CV from '../assets/RobsonDiego_Curriculo2023_06.pdf'
import '../styles/home.scss'


// Olhar os container e tamanhos no doc do react-bootstrap
// Algo 3d? (adrian jsmastery)

export function Home() {
    const { t } = useTranslation()

    return (
        <section>
            <Container fluid id="defaultContainer">
                <Particle />
                <Container className="main-content-home">
                    <Row className="mainRowHome">
                        <Col md={7} className="left-content">
                            <div className="text-content">
                                <h1>{t("Oi, sou")} <span className="name_span">Robson Diego</span>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                t("Desenvolvedor Front-End."),
                                                t("Desenvolvedor Web."),
                                                t("Tecnico em informatica.")
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 25,
                                            delay: 50,
                                        }}
                                    />
                                </h1>
                            </div>
                            <ButtonNav variant="outline-primary" href={CV} target="_blank" size="lg">
                                <FiDownload />
                                {t("Visualize meu curriculo")}
                            </ButtonNav>
                        </Col>
                        <Col md={5}>
                            <img src={mainHome} alt="Desenho de um desenvolvedor" className="photoHome" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

