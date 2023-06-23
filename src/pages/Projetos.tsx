import GitHubCalendar from "react-github-calendar";
import { ThemeInput, Activity } from "react-activity-calendar";
import Particle from "../components/Particle";
import { Container, Row, Col, Button } from "react-bootstrap"
import { ProjectCard } from "../components/ProjectCard";
import { SiFigma, SiPython, SiMysql, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiRiotgames, SiAxios } from 'react-icons/si'
import LOL from '../assets/lolLogo.png'
import ListEfficient from '../assets/ListEfficient1.png'
import DateCountdown from '../assets/Date.png'
import IMC from '../assets/IMC.png'
import Ada from '../assets/Ada.png'
import { useTranslation } from "react-i18next";
import '../styles/projects.scss'

export function Projetos() {

    const { t } = useTranslation()
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
            <div className="title">
                <h1><span>{t("Projetos")}</span> {t("já construidos")}</h1>
            </div>
            <Container className="projects">
                <Row className="projectsRow">
                    <Col md={4}>
                        <ProjectCard
                            image={Ada}
                            alt="Ada Lovelace"
                            titulo="ADA Uniso"
                            descricao={t("Prototipo de um aplicativo que tem como objetivo a interaçao e o esclarecimento de duvidas entre alunos e professores dentro da universidade")}
                            changeButton={true}
                            url="https://www.figma.com/file/hv16XgK5Hn4kSb91dO0ivh/ADA?type=design&node-id=0%3A1&t=MwlN6YjV6FhRiTFd-1"
                            urlDemo="https://www.figma.com/proto/hv16XgK5Hn4kSb91dO0ivh/ADA?node-id=0-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A3"
                            >
                            <li>
                                <SiFigma role="img" aria-label="Figma"/>
                            </li>
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={ListEfficient}
                            alt={t("Tela login List Efficient app") || ""}
                            titulo="List Efficient"
                            descricao={t("List Efficient é um projeto destinado a todos que buscam organizar suas tarefas, como tarefas do dia a dia, do trabalho, da faculdade ou de qualquer outro ramo de sua vida.")}
                            changeButton={false}
                            url="https://github.com/TheRealsz/ToDoList"
                            urlDemo="#"
                            disabled={true}>
                            <li>
                                <SiPython role="img" aria-label="Python" />
                            </li>
                            <li>
                                <SiMysql role="img" aria-label="MySQL"/>
                            </li>
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={LOL}
                            alt={t("Tela do site Random LOL") || ""}
                            titulo="Random LOL"
                            descricao={t("O Random LOL é um projeto que lhe mostra um personagem do jogo League of Legends de forma aleatória, lhe mostrando seu nome, ícone, habilidades, historia e características do personagem.")}
                            changeButton={false}
                            url="https://github.com/TheRealsz/Random_LOL"
                            urlDemo="#"
                            disabled={true}>
                            <li>
                                <SiHtml5 role="img" aria-label="HTML 5"/>
                            </li>
                            <li>
                                <SiCss3 role="img" aria-label="CSS 3"/>
                            </li>
                            <li>
                                <SiJavascript role="img" aria-label="Javascript"/>
                            </li>
                            <li>
                                <SiBootstrap role="img" aria-label="Bootstrap"/>
                            </li>
                            <li>
                                <SiRiotgames role="img" aria-label="Riot Games"/>
                            </li>
                            <li>
                                <SiAxios role="img" aria-label="Axios"/>
                            </li>
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={DateCountdown}
                            alt={t("Tela do site Date Countdown") || ""}
                            titulo="Date Countdown"
                            descricao={t("O Date Countdown foi projetado para o usuário se informar do tempo em que há entre o agora e a data estipulada pelo mesmo.")}
                            changeButton={false}
                            url="https://github.com/TheRealsz/Date_Countdown"
                            urlDemo="https://therealsz.github.io/Date_Countdown">
                            <li>
                                <SiHtml5 role="img" aria-label="HTML 5"/>
                            </li>
                            <li>
                                <SiCss3 role="img" aria-label="CSS 3"/>
                            </li>
                            <li>
                                <SiJavascript role="img" aria-label="Javascript"/>
                            </li>
                            <li>
                                <SiBootstrap role="img" aria-label="Bootstrap"/>
                            </li>
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard
                            image={IMC}
                            alt={t("Tela do site Calculadora IMC") || ""}
                            titulo="Calculadora IMC"
                            descricao={t("A Calculadora IMC foi projetada para ajudar as pessoas a identificar dentro do padrão do IMC se esta dentro do peso ideal para suas características físicas")}
                            changeButton={false}
                            url="https://github.com/TheRealsz/Calculadora_IMC"
                            urlDemo="https://therealsz.github.io/Calculadora_IMC/Index.html">
                            <li>
                                <SiHtml5 role="img" aria-label="HTML 5"/>
                            </li>
                            <li>
                                <SiCss3 role="img" aria-label="CSS 3"/>
                            </li>
                            <li>
                                <SiJavascript role="img" aria-label="Javascript"/>
                            </li>
                            <li>
                                <SiBootstrap role="img" aria-label="Bootstrap"/>
                            </li>
                        </ProjectCard>
                    </Col>
                </Row>
            </Container>
            <div className="title">
                <h1>{t("Dias")} <span>{t("codados")}</span></h1>
            </div>
            <Container className="calender-github">
                <Row>
                    <div data-aos="zoom-in">
                        <GitHubCalendar 
                            transformData={selectLastHalfYear} 
                            username="TheRealsz" 
                            colorScheme="light" 
                            fontSize={17} 
                            blockSize={17} 
                            style={{ color: '#fff' }} 
                            theme={explicitTheme} 
                            blockMargin={6} 
                        />
                    </div>
                </Row>
            </Container>
        </Container>

    )
}