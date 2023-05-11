import { Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { ReactNode } from 'react'
import '../styles/projectCard.scss'

type projectCardProps = {
    image: string,
    titulo: string,
    descricao: string,
    urlGithub: string,
    urlDemo?: string,
    disabled?: boolean
}

export function ProjectCard(props : projectCardProps){
    return (
        <div className="project-card">
        <div className="lines"></div>
        <div className="img-project">
            <img src={props.image} alt="" />
        </div>
        <div className="content">
            <div className="resume">
                <h2>{props.titulo}</h2>
                <p>{props.descricao}</p>
                <div className="buttons-card">
                    <Button size="sm" className="buttonCard" href={props.urlGithub} target="blank_"> <AiFillGithub /> Github</Button>
                    <Button size="sm" className="buttonCard" href={props.urlDemo} disabled={props.disabled} target="blank_">Demo</Button>
                </div>
            </div>
        </div>
    </div>
    )
}