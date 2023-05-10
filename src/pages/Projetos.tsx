import GitHubCalendar from "react-github-calendar";
import {ThemeInput , Activity} from "react-activity-calendar";
import Particle from "../components/Particle";
import { Container, Row, Col } from "react-bootstrap"
import Brazil from '../assets/Brazil.png'
import '../styles/projects.scss'

// Cards com imagem, titulo, descricao, botao para repo e para a demo
// Animation no card
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
            <Container className="calender-github">
                <Row>
                    <GitHubCalendar transformData={selectLastHalfYear} username="TheRealRobinho" colorScheme="light" fontSize={17} blockSize={17} style={{ color: '#fff' }} theme={explicitTheme} blockMargin={6} />
                </Row>
            </Container>
            <Container className="projects">
                <div className="project-card">
                    <div className="lines"></div>
                    <div className="img-project">
                        <img src={Brazil} alt="" />
                    </div>
                    <div className="content">
                        <div className="resume">
                            <h2>Teste</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ipsam recusandae enim error delectus cum? Quae esse aliquid incidunt numquam, perferendis tempora vitae molestias dolor iure quaerat, deleniti nobis quas!</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>

    )
}