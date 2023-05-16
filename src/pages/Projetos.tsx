import GitHubCalendar from "react-github-calendar";
import { ThemeInput, Activity } from "react-activity-calendar";
import Particle from "../components/Particle";
import { Container, Row, Col, Button } from "react-bootstrap"
import { ProjectCard } from "../components/ProjectCard";
import LOL from '../assets/lolLogo.png'
import ListEfficient from '../assets/ListEfficient.png'
import DateCountdown from '../assets/Date.png'
import IMC from '../assets/IMC.png'
import Ada from '../assets/Ada.png'
import '../styles/projects.scss'


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
                        <ProjectCard />
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}