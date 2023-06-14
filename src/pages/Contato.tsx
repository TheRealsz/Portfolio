import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Particle from "../components/Particle"
import Map from '../components/Map'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from "react-i18next";
import '../styles/contact.scss'

// Botao disabled ate add algumas info
// Criar outro botao para enviar? ou usar o buttonNav para dar submit tbm?
// Pop up pra quando der tudo ok pra msg
// Tentar traduzir as msg dos toasts e dos placeholders
// Deixar os inputs required
// Add animaçao
export function Contato() {

    const { t } = useTranslation()

    const serviceID = process.env.REACT_APP_SERVICE_ID || ''
    const templateID = process.env.REACT_APP_TEMPLATE_ID || ''
    const publicID = process.env.REACT_APP_PUBLIC_ID || ''
    
    const successToast = () => toast.success('Mensagem enviada!', {style: {backgroundColor: "green", color: "#fff", top: "50px", position: "relative"}, });
    const errorToast = () => toast.error('Algo deu errado, tente novamente!', {style: {backgroundColor: "red", color: "#fff", top: "50px", position: "relative"}, });

    // Ver func
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, form.current!, publicID)
            .then((result) => {
                successToast()
                if (form.current) {
                    form.current.reset();
                  }
            }, (error) => {
                errorToast()
            });
    };
    
    return (
        <Container fluid id="contactContainer">
            <Particle />
            <Container>
            <Toaster />
                <Row>
                    <Col md={5}>
                        <Map />
                    </Col>
                    <Col md={7} className="formBox">
                        <div className="backgroundTxt">
                            <Form ref={form} onSubmit={sendEmail}>
                                <h1>{t('Entre em ')}<span>{t('contato')}</span>{t(' comigo')}</h1>
                                <p>{t('Se deseja que eu desenvolva um projeto para voce ou apenas queira dar um oi, me mande uma mensagem!')}</p>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>{t('Nome')}</Form.Label>
                                    <Form.Control type="name" placeholder="Digite seu nome" name="name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Digite seu email" name="email"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>{t('Mensagem')}</Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder="Digite sua mensagem" name="message"/>
                                </Form.Group>
                                <div className="boxButtons">
                                    <Button type="submit">{t('Enviar')}</Button>
                                    <a href="mailto:Robsondiegoandrade@outlook.com">{t('Ou me mande um email diretamente')}</a>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}