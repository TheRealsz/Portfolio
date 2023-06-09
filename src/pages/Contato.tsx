import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Particle from "../components/Particle"
import Map from '../components/Map'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.scss'

// Botao disabled ate add algumas info
// Criar outro botao para enviar? ou usar o buttonNav para dar submit tbm?
// Pop up pra quando der tudo ok pra msg
export function Contato() {


    const serviceID = process.env.REACT_APP_SERVICE_ID || ''
    const templateID = process.env.REACT_APP_TEMPLATE_ID || ''
    const publicID = process.env.REACT_APP_PUBLIC_ID || ''

    const form = useRef(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, form.current!, publicID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    
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
                            <Form ref={form} onSubmit={sendEmail}>
                                <h1>Entre em <span>contato</span> comigo!</h1>
                                <p>Se deseja que eu desenvolva um projeto para voce ou apenas queira dar um oi, me mande uma mensagem!</p>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="name" placeholder="Digite seu nome" name="name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Digite seu email" name="email"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Mensagem</Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder="Digite sua mensagem" name="message"/>
                                </Form.Group>
                                <div className="boxButtons">
                                    <Button type="submit">Enviar</Button>
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