import { Container, Row, Col } from "react-bootstrap"
import { DropdownLng } from "../components/DropdownLng";
import Particle from "../components/Particle";
import '../styles/habilidades.scss'

// Skills e ferramentas que uso + dias que codei API GITHUB
export function Habilidades() {
    return (
        <section>
            <Container fluid id="defaultContainer">
            <Particle />
                <DropdownLng />
            </Container>
        </section>
    )
}