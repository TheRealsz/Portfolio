import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Particle from "../components/Particle"
import Map from '../components/Map'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from "react-i18next";
import '../styles/contact.scss'


export function Contato() {

    const { t } = useTranslation()

    const serviceID = process.env.REACT_APP_SERVICE_ID || ''
    const templateID = process.env.REACT_APP_TEMPLATE_ID || ''
    const publicID = process.env.REACT_APP_PUBLIC_ID || ''
    
    const successToast = () => toast.success(t('Mensagem enviada!'), {style: {backgroundColor: "green", color: "#fff", top: "50px", position: "relative"}, });
    const errorToast = () => toast.error(t('Algo deu errado, tente novamente!'), {style: {backgroundColor: "red", color: "#fff", top: "50px", position: "relative"}, });

    const form = useRef<HTMLFormElement | null>(null);

    async function sendEmail(e: React.FormEvent) {
        try{
            e.preventDefault()
            await emailjs.sendForm(serviceID, templateID, form.current!, publicID)
            successToast()
            if (form.current) {
                form.current.reset();
              }
        }
        catch (error){
            errorToast()
        }
    }

    return (
        <Container fluid id="contactContainer">
            <Particle />
            <Container>
            <Toaster />
                <Row className="contactRow">
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
                                    <Form.Control type="name" placeholder={t("Digite seu nome") || ""} name="name" required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder={t("Digite seu email") || ""} name="email" required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>{t('Mensagem')}</Form.Label>
                                    <Form.Control as="textarea" rows={6} placeholder={t("Digite sua mensagem") || ""} name="message" required/>
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