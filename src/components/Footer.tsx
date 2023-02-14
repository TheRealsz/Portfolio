import { Container, Row, Col } from "react-bootstrap"
import '../styles/footer.scss'
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

// Deixar responsivo

export function Footer(){
    
    function redirect(url : string) {
        window.open(url)
    }

    return(
        <Container fluid className="footer">
            <Row>
                <Col md={6}>
                    <div className="developed">
                        <p>Desenvolvido por <strong className="strong-name" onClick={() => redirect('https://github.com/TheRealRobinho')}>Robson Diego</strong></p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="social-media">
                        <ul className="list-socialmedia">
                            <li onClick={() => redirect('https://github.com/TheRealRobinho')}>
                                <AiFillGithub/>
                            </li>
                            <li onClick={() => redirect('https://www.instagram.com/therealrobs_/')}>
                                <AiFillInstagram/>
                            </li>
                            <li onClick={() => redirect('https://twitter.com/TheRealRobs__')}>
                                <AiFillTwitterCircle/>
                            </li>
                            <li onClick={() => redirect('https://www.linkedin.com/in/robsondiegoandrade/')}>
                                <AiFillLinkedin/>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

