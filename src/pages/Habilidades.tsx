import { Container, Row, Col } from "react-bootstrap"
import Particle from "../components/Particle";
import '../styles/skills.scss'
import { Card } from "../components/Card";
import { SiReact, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiSass, SiJavascript, SiMysql, SiGit, 
         SiGithub, SiPython, SiFigma, SiVisualstudiocode, SiWindows, SiNpm } from 'react-icons/si'
import { TbJson } from 'react-icons/tb'
import { useTranslation } from "react-i18next"

export function Habilidades() {
    
    const { t } = useTranslation()
    
    return (
        <section>
            <Container fluid id="defaultContainer">
                <Particle />
                <Container className="skills">
                    <div className="title">
                        <h1><span>{t("Habilidade")}s </span> {t("profissionais")}</h1>
                    </div>
                    <Row className="cardRow">
                        <Col md={3}>
                            <Card>
                                <SiReact />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiTypescript />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiHtml5 />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiCss3 />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiBootstrap />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiSass />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiJavascript />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiMysql />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiGit />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiGithub />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiPython />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <TbJson />
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className="tools">
                    <div className="title">
                        <h1>{t("Minhas")} <span>{t("ferramentas")}</span></h1>
                    </div>
                    <Row className="cardRow">
                        <Col md={3}>
                            <Card>
                                <SiVisualstudiocode />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiWindows />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiNpm />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiFigma />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}