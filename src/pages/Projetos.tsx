import GitHubCalendar from "react-github-calendar";
import { ThemeInput, Activity } from "react-activity-calendar";
import Particle from "../components/Particle";
import { Container, Row, Col, Button } from "react-bootstrap"
import { ProjectCard } from "../components/ProjectCard";
import LOL from '../assets/lolLogo.png'
import ListEfficient from '../assets/ListEfficient.png'
import DateCountdown from '../assets/Date.png'
import IMC from '../assets/IMC.png'
import '../styles/projects.scss'

// Todos os projetos, até o CRUD e Figma
// Made with?

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
                            image={ListEfficient}
                            titulo="List Efficient"
                            descricao="List Efficient é um projeto destinado a todos que buscam organizar suas tarefas seja do dia a dia, do trabalho, da faculdade ou de qualquer outro ramo de sua vida. Projeto que se tem um CRUD (create, read, update, delete) completo."
                            urlGithub="https://github.com/TheRealRobinho/Integracao_Python_BD"
                            disabled={true}
                        />
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={LOL}
                            titulo="Random LOL"
                            descricao="O Random LOL é um projeto que lhe mostra um personagem do jogo League of Legends de forma aleatória, apresentando seu nome, ícone, habilidades, historia e características do personagem."
                            urlGithub="https://github.com/TheRealRobinho/Random_LOL"
                            disabled={true}
                        />
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={DateCountdown}
                            titulo="Date Countdown"
                            descricao="O Date Countdown é um projeto que o usuário ira se informar do tempo em que há entre o agora e a data estipulada pelo mesmo. Pode ser usado, para calcular quanto tempo falta para o seu aniversário, para uma viagem, etc."
                            urlGithub="https://github.com/TheRealRobinho/Date_Countdown"
                            urlDemo="https://therealrobinho.github.io/Date_Countdown/"
                        />
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={IMC}
                            titulo="Calculadora IMC"
                            descricao="A Calculadora IMC é projetada para ajudar as pessoas, dentro do padrão do IMC, identificar se esta dentro do peso ideal para suas características físicas. O IMC é calculado da seguinte forma: divide-se o peso do paciente pela sua altura elevada ao quadrado."
                            urlGithub="https://github.com/TheRealRobinho/Random_LOL"
                            disabled={true}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}