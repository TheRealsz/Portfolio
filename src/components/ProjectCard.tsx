import { Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiFigma } from 'react-icons/si'
import { ReactNode, useState } from 'react'
import Ada from '../assets/Ada.png'
import '../styles/projectCard.scss'

type projectCardProps = {
    image?: string,
    alt?: string,
    titulo?: string,
    descricao?: string,
    url?: string,
    urlDemo?: string,
    disabled?: boolean,
    icon?: boolean,
    children?: ReactNode
}

// Descobrir como posso dar o set la da pagina de projetos para que mude o icone do botao

export function ProjectCard(props : projectCardProps){
    const [iconButton, setIconButton] = useState(true)

    const typeOfText = iconButton ? "Github" : "Figma"
    const typeOfbutton =<Button size="sm" className="buttonCard" href={props.url}>{iconButton? <AiFillGithub/> : <SiFigma/>}{typeOfText}</Button>

    return (
    <div className="project-card">
        <div className="imgProject">   
            <img src={props.image} alt={props.alt} />
        </div>
        <div className="content">            
                <h2>{props.titulo}</h2>
                <p>{props.descricao}</p>
            <div className="buttons-card">
                {typeOfbutton}
                <Button size="sm" className="buttonCard" href={props.urlDemo} disabled={props.disabled}>Demo</Button>
            </div>
            {props.children}
        </div>
    </div>
    )
}