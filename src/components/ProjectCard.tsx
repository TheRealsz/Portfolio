import { Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiFigma } from 'react-icons/si'
import { ReactNode, useState } from 'react'
import '../styles/projectCard.scss'

// Add o drag com o framer motion

type projectCardProps = {
    image?: string,
    alt?: string,
    titulo?: string,
    descricao?: string,
    url?: string,
    urlDemo?: string,
    disabled?: boolean,
    changeButton?: boolean,
    children?: ReactNode
}

export function ProjectCard(props: projectCardProps) {
    const [iconButton, setIconButton] = useState(false)

    const verTypeButton = props.changeButton;

    if (verTypeButton !== iconButton) {
        setIconButton(!iconButton)
    }

    const typeOfbutton = <Button size="sm" className="buttonCard" href={props.url} target="_blank">{iconButton ? <SiFigma /> : <AiFillGithub />}{iconButton ? "Figma" : "Github"}</Button>

    return (
        <div className="boxProjectCard">
            <div className="project-card">
                <div className="imgProject">
                    <img src={props.image} alt={props.alt} />
                </div>
                <div className="content">
                    <h2>{props.titulo}</h2>
                    <p>{props.descricao}</p>
                    <div className="buttons-card">
                        {typeOfbutton}
                        <Button size="sm" className="buttonCard" href={props.urlDemo} disabled={props.disabled} target="_blank">Demo</Button>
                    </div>
                    <div className="made">
                        <p>Made with</p>
                        <div className="test">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}