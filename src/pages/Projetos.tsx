import GitHubCalendar from "react-github-calendar";
import {ThemeInput , Activity} from "react-activity-calendar";
import Particle from "../components/Particle";
import { Container, Row, Col } from "react-bootstrap"

export function Projetos() {

    const explicitTheme: ThemeInput = {
        light: ['#fff', '#0F516C']
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
            <Container className="calender-github">
                <Row>
                    <GitHubCalendar transformData={selectLastHalfYear} username="TheRealRobinho" colorScheme="light" fontSize={17} blockSize={17} style={{ color: '#fff' }} theme={explicitTheme} blockMargin={6} />
                </Row>
            </Container>
        </Container>

    )
}