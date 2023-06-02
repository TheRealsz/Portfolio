import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Particle from "../components/Particle"
import Map from '../components/Map'
import '../styles/contact.scss'

// Nao utilize apenas o placeholder - acessibilidade
// Colocar redes sociais e outlook aqui tambem PARECIDO https://www.abdellatif-laghjaj.ml/contact
// Botao disabled ate add algumas info
// Criar outro botao para enviar? ou usar o buttonNav para dar submit tbm?
// Objeto 3d parecido com do jsmastery Adrian
// Tentar fazer real funcionar o envio de msg
// Adicionar um fundo igual no sobre?
export function Contato() {
    return (
        <Container fluid id="contactContainer">
            <Particle />
            <Row>
                <Col md={5}>
                    <Map />
                </Col>
                <Col md={7}>
                    <Form>
                        <h3>Entre em contato comigo!</h3>
                        <p>Se deseja que eu desenvolva um projeto para voce ou apenas queira dar um oi, me mande uma mensagem!</p>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="name" placeholder="Digite seu nome" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control type="message" placeholder="Digite sua mensagem" />
                        </Form.Group>
                        <div>
                            <Button>Enviar</Button>
                            <a href="mailto:Robsondiegoandrade@outlook.com">Ou me mande um email diretamente</a>
                        </div>
                    </Form>
                    <div>
                        {/* Social medias aqui novamente? */}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}