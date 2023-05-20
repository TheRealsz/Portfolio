import GitHubCalendar from "react-github-calendar";
import { ThemeInput, Activity } from "react-activity-calendar";
import Particle from "../components/Particle";
import { Container, Row, Col, Button } from "react-bootstrap"
import { ProjectCard } from "../components/ProjectCard";
import { SiFigma, SiPython, SiMysql, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiRiotgames } from 'react-icons/si'
import LOL from '../assets/lolLogo.png'
import ListEfficient from '../assets/ListEfficient1.png'
import DateCountdown from '../assets/Date.png'
import IMC from '../assets/IMC.png'
import Ada from '../assets/Ada.png'
import '../styles/projects.scss'

// Arrumar botao demo disabled
// Arrumar as imagens, ou deixar tudo com um logo ou tudo com imagem de parte do app

export function Projetos() {

    // Visualizar funcoes
    const explicitTheme: ThemeInput = {
        light: ['#fff', '#022C3E']
    };

    const selectLastHalfYear = (contributions: Activity[]) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter((activity: Activity) => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };

    return (
        <Container fluid id="defaultContainer">
            <Particle />
            <h1>Projetos que produzi</h1>
            {/* <Container className="calender-github">
                <Row>
                    <GitHubCalendar transformData={selectLastHalfYear} username="TheRealRobinho" colorScheme="light" fontSize={17} blockSize={17} style={{ color: '#fff' }} theme={explicitTheme} blockMargin={6} />
                </Row>
            </Container> */}
            <Container className="projects">
                <Row>
                    <Col md={4}>
                        <ProjectCard
                            image={Ada}
                            // alt={}
                            titulo="ADA Uniso"
                            descricao="Prototipo de um aplicativo que tem como objetivo a interaçao e o esclarecimento de duvidas entre alunos e professores dentro da universidade"
                            changeButton={true}
                            url="https://www.figma.com/file/hv16XgK5Hn4kSb91dO0ivh/ADA?type=design&node-id=0%3A1&t=MwlN6YjV6FhRiTFd-1"
                            urlDemo="https://www.figma.com/proto/hv16XgK5Hn4kSb91dO0ivh/ADA?node-id=0-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A3">
                            <li>
                                <SiFigma />
                            </li>
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={ListEfficient}
                            // alt={}
                            titulo="List Efficient"
                            descricao="List Efficient é um projeto destinado a todos que buscam organizar suas tarefas seja do dia a dia, do trabalho, da faculdade ou de qualquer outro ramo de sua vida."
                            changeButton={false}
                            url="https://github.com/TheRealRobinho/ToDoList"
                            disabled={true}>
                            <li>
                                <SiPython />
                            </li>
                            <li>
                                <SiMysql />
                            </li>
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={LOL}
                            // alt={}
                            titulo="Random LOL"
                            descricao="O Random LOL é um projeto que lhe mostra um personagem do jogo League of Legends de forma aleatória, lhe mostrando seu nome, ícone, habilidades, historia e características do personagem."
                            changeButton={false}
                            url="https://github.com/TheRealRobinho/Random_LOL"
                            disabled={true}>
                            <li>
                                <SiHtml5 />
                            </li>
                            <li>
                                <SiCss3 />
                            </li>
                            <li>
                                <SiJavascript />
                            </li>
                            <li>
                                <SiBootstrap />
                            </li>
                            <li>
                                <SiRiotgames />
                            </li>
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={DateCountdown}
                            // alt={}
                            titulo="Date Countdown"
                            descricao="O Date Countdown foi projetado para o usuário se informar do tempo em que há entre o agora e a data estipulada pelo mesmo."
                            changeButton={false}
                            url="https://github.com/TheRealRobinho/Date_Countdown"
                            urlDemo="https://therealrobinho.github.io/Date_Countdown/">
                            <li>
                                <SiHtml5 />
                            </li>
                            <li>
                                <SiCss3 />
                            </li>
                            <li>
                                <SiJavascript />
                            </li>
                            <li>
                                <SiBootstrap />
                            </li>
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={IMC}
                            // alt={}
                            titulo="Calculadora IMC"
                            descricao="A Calculadora IMC foi projetada para ajudar as pessoas a identificar dentro do padrão do IMC se esta dentro do peso ideal para suas características físicas"
                            changeButton={false}
                            url="https://github.com/TheRealRobinho/Calculadora_IMC"
                            urlDemo="https://therealrobinho.github.io/Calculadora_IMC/Index.html">
                            <li>
                                <SiHtml5 />
                            </li>
                            <li>
                                <SiCss3 />
                            </li>
                            <li>
                                <SiJavascript />
                            </li>
                            <li>
                                <SiBootstrap />
                            </li>
                        </ProjectCard>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}