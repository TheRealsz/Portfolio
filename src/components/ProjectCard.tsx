import { Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { ReactNode } from 'react'
import Ada from '../assets/Ada.png'
import '../styles/projectCard.scss'

// type projectCardProps = {
//     image: string,
//     titulo: string,
//     descricao: string,
//     urlGithub: string,
//     urlDemo?: string,
//     disabled?: boolean
// }


export function ProjectCard(){
    return (
    <div className="project-card">
        <div className="imgProject">   
            <img src={Ada} alt="" />
        </div>
        <div className="content">            
                <h2>Ada</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima esse harum blanditiis, sapiente voluptatum aut excepturi vel saepe nam et magnam nobis tempore ipsum repudiandae accusantium inventore placeat reprehenderit!</p>
            <div className="buttons-card">
                <Button size="sm" className="buttonCard">GitHub</Button>
                <Button size="sm" className="buttonCard">Demo</Button>
            </div>
        </div>
    </div>
    )
}