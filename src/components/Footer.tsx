import { Container, Row, Col } from "react-bootstrap"
import '../styles/footer.scss'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import { SiMicrosoftoutlook } from 'react-icons/si'
import { useTranslation } from 'react-i18next'

// Deixar responsivo
// Add Outlook
export function Footer(){
    
    const { t } = useTranslation()

    function redirect(url : string) {
        window.open(url)
    }

    return(
        <Container fluid className="footer">
            <Row>
                <Col md={6}>
                    <div className="developed">
                        <p>{t("Desenvolvido por ")}<strong className="strong-name" onClick={() => redirect('https://github.com/TheRealRobinho')}>Robson Diego</strong></p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="social-media">
                        <ul className="list-socialmedia">
                            <li>
                                <a href="https://github.com/TheRealRobinho" target="_blank">
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/therealrobs_/" target="_blank">
                                    <AiFillInstagram/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/robsondiegoandrade/" target="_blank">
                                    <AiFillLinkedin/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:Robsondiegoandrade@outlook.com">
                                    <SiMicrosoftoutlook/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

