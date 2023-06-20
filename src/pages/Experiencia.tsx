import { Col, Container, Row } from "react-bootstrap";
import Particle from "../components/Particle";
import Lottie from 'react-lottie';
import cat from '../lotties/cat-crying.json';
import { useTranslation } from "react-i18next";
import '../styles/experience.scss'

export function Experiencia(){

    const { t } = useTranslation()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cat,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <Container fluid id="experienceContainer">
            <Particle/>
            <Container className="mainExperience">
                <Row className="experienceRow">
                    <Col>
                        <div className="lottie-box">
                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="textDiv">
                            <h1>{t("Infelizmente, até o momento, sem nenhuma experiencia profissional...")}</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}