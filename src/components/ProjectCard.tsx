import { Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { ReactNode } from 'react'
import '../styles/projectCard.scss'

type projectCardProps = {
    children : ReactNode,
    image: string
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
                {props.children}
                <div className="buttons-card">
                    <Button size="sm" className="buttonCard"> <AiFillGithub /> Github</Button>
                    <Button size="sm" className="buttonCard">Demo</Button>
                </div>
            </div>
        </div>
    </div>
    )
}