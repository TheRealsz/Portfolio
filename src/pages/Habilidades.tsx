import { Container, Row, Col } from "react-bootstrap"
import Particle from "../components/Particle";
import '../styles/skills.scss'
import { Card } from "../components/Card";
import {
    SiReact, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiSass, SiJavascript, SiMysql, SiGit,
    SiGithub, SiPython, SiFigma, SiVisualstudiocode, SiWindows, SiNpm
} from 'react-icons/si'
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
                                <SiReact role="img" aria-label="React"/>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiTypescript role="img" aria-label="Typescript" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiHtml5 role="img" aria-label="HTML 5"/>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiCss3 role="img" aria-label="CSS 3" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiBootstrap role="img" aria-label="Bootstrap" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiSass role="img" aria-label="Sass" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiJavascript role="img" aria-label="Javascript" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiMysql role="img" aria-label="MySQL" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiGit role="img" aria-label="Git" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiGithub role="img" aria-label="Github" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiPython role="img" aria-label="Python" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <TbJson role="img" aria-label="Json" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className="tools" data-aos="fade-in" data-aos-delay="50" data-aos-duration="1000">
                    <div className="title">
                        <h1>{t("Minhas")} <span>{t("ferramentas")}</span></h1>
                    </div>
                    <Row className="cardRow">
                        <Col md={3}>
                            <Card>
                                <SiVisualstudiocode role="img" aria-label="Visual studio code" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiWindows role="img" aria-label="Windows" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiNpm role="img" aria-label="NPM" />
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <SiFigma role="img" aria-label="Figma" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}