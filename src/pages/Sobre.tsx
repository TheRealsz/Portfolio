import Particle from "../components/Particle";
import Foto from "../assets/foto.jpeg"
import { Container, Row, Col, Button } from "react-bootstrap"
import '../styles/about.scss'
import {BiJoystickAlt, BiBook} from 'react-icons/bi'
import {FiMonitor} from 'react-icons/fi'
import {FaTshirt} from 'react-icons/fa'
import {CgGym} from 'react-icons/cg'

// Nome, o que sou e o que faço atualmente, no que estou focado/tenho interesse, onde pode me encontrar, de onde sou e oq gosto de fazer alem de programar, objetivos

// Se ficar muito grande, tranferir algumas coisas para o Home para introduzir brevemente, de inicio, tentar juntar o que tem no home e no about desse https://soumyajit.vercel.app/about 
// falando sobre o que sei, areas de interesse e no que faço
export function Sobre(){
    return(
        <section>
            <Container fluid id="defaultContainer">
                <Particle/>
                <Row className="imgRow">
                    <img src={Foto} alt="Foto minha" />
                </Row>
                <Row className="contentRow">
                    <Col md={6}>
                        <p>Ola meu nome é <strong>Robson Diego</strong>, moro em Sorocaba-SP e sou <strong>Desenvolvedor Front-End</strong>. Atualmente, estou no 2º semestre de
                        <strong>Analise e desenvolvimento de sistemas</strong> e estudando <strong>ReactJS, Typescript e SCSS</strong> em casa, fazendo projetos proprios para praticar. 
                        Além de programar e estudar, gosto de fazer outras coisas como:</p>
                        <ul>
                            <li>
                                <BiJoystickAlt /> Jogar
                            </li>
                            <li>
                                <FiMonitor /> Assistir series/filmes/animes/lives/videos
                            </li>
                            <li>
                                <CgGym/> Academia
                            </li>
                            <li>
                                <BiBook/> Ler
                            </li>
                            <li>
                                <FaTshirt/> Moda
                            </li>
                        </ul>
                        <div className="divider"></div>
                    </Col>
                    <Col md={6}>
                        <p>Meu foco atual é adquirir o maximo de conhecimento nessas tecnologias para conseguir um emprego na area e poder impactar positivamente
                        a vida de outras pessoas com minhas habilidades e conhecimentos. <strong>Se estiver interessado em me convidar para um projeto ou queira 
                        que eu construa um, pode entrar em contato comigo pelas minhas redes sociais ou por aqui.</strong></p>
                        <Button>Contato</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}