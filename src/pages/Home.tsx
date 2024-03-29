import { Container, Row, Col } from "react-bootstrap"
import Particle from "../components/Particle"
import Typewriter from 'typewriter-effect'
import { ButtonNav } from "../components/ButtonNav"
import { useTranslation } from "react-i18next"
import { FiDownload } from "react-icons/fi"
import CV from '../assets/RobsonDiego_Curriculo2023_07.pdf'
import Lottie from 'react-lottie';
import spaceman from '../lotties/happy-spaceman.json';
import '../styles/home.scss'


export function Home() {
    const { t } = useTranslation()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: spaceman,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
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
                        <div className="button-content">
                            <ButtonNav variant="outline-primary" href={CV} target="_blank" size="lg">
                                <FiDownload />
                                {t("Visualize meu curriculo")}
                            </ButtonNav>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="lottie-box">
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

