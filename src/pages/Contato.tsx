import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Particle from "../components/Particle"
import Map from '../components/Map'
import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import '../styles/contact.scss'


// Botao disabled ate add algumas info
// Criar outro botao para enviar? ou usar o buttonNav para dar submit tbm?
export function Contato() {

    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    return (
        <Container fluid id="contactContainer">
            <Particle />
            <Container>
                <Row>
                    <Col md={5}>
                        <Map />
                    </Col>
                    <Col md={7}>
                        <div className="backgroundTxt">
                            <Form>
                                <h1>Entre em <span>contato</span> comigo!</h1>
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
                                    <Form.Control as="textarea" rows={6} placeholder="Digite sua mensagem" />
                                </Form.Group>
                                <div className="boxButtons">
                                    <Button>Enviar</Button>
                                    <a href="mailto:Robsondiegoandrade@outlook.com">Ou me mande um email diretamente</a>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}