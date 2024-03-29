import Particle from "../components/Particle";
import Foto from "../assets/foto.jpeg"
import { Container, Row, Col } from "react-bootstrap"
import '../styles/about.scss'
import { BiJoystickAlt, BiBook } from 'react-icons/bi'
import { FiMonitor } from 'react-icons/fi'
import { FaTshirt } from 'react-icons/fa'
import { CgGym } from 'react-icons/cg'
import { ButtonNav } from "../components/ButtonNav";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export function Sobre() {

    const { t } = useTranslation()

    const navigate = useNavigate()

    function navigateTo(url: string) {
        navigate(url)
    }

    return (
        <section>
            <Container fluid id="defaultContainer">
                <Particle />
                <Container className="main-content-about">
                    <Row className="imgRow">
                        <img src={Foto} alt="Foto do criador desse site" />
                    </Row>
                    <Row className="contentRow">
                        <Col md={6} className="firstTxtBox">
                            <div className=" defaultTxt presentationTxt">
                                <p>{t("Oi, meu nome é")} <strong>Robson Diego</strong>, {t("moro em Sorocaba-SP e sou um")} <strong>{t("Desenvolvedor Front-End")}</strong>. {t("Atualmente, estou no 2º semestre de")}
                                    <strong> {t("Analise e desenvolvimento de sistemas")}</strong> {t("e estudo em casa as tecnologias")} <strong>{t("ReactJS, Typescript e SCSS")}</strong>,
                                    {t(" fazendo projetos próprios para praticar. Além de programar e estudar, gosto de fazer outras coisas como:")}</p>
                                <ul>
                                    <li>
                                        <BiJoystickAlt /> {t("Jogar")}
                                    </li>
                                    <li>
                                        <FiMonitor /> {t("Assistir series e filmes")}
                                    </li>
                                    <li>
                                        <CgGym /> {t("Academia")}
                                    </li>
                                    <li>
                                        <BiBook /> {t("Ler")}
                                    </li>
                                    <li>
                                        <FaTshirt /> {t("Moda")}
                                    </li>
                                </ul>
                            </div>
                            <div className="divider"></div>
                        </Col>
                        <Col md={6} className="secondTxtBox">
                            <div className="defaultTxt profissionalTxt">
                                <p>{t("Meu foco atual é adquirir o maximo de conhecimento nessas tecnologias para conseguir um emprego na area e poder impactar positivamente a vida de outras pessoas com minhas habilidades e conhecimentos. ")}
                                    <strong>{t("Se estiver interessado em me convidar para um projeto ou queira que eu construa um, pode entrar em contato comigo pelas minhas redes sociais ou por aqui.")}</strong></p>
                                <ButtonNav variant="outline-primary" onClick={() => navigateTo('/Contato')} size="sm">{t("Contato")}</ButtonNav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}