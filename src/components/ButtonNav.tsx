import { Button } from "react-bootstrap";
import { ButtonHTMLAttributes } from "react";
import '../styles/buttonNav.scss'

// Colocar os props do bootstrap nele tambem
type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonNavProps = { variant ?: string , size: "sm" | "lg" | undefined}
type ButtonNav = ButtonAttributes & ButtonNavProps

export function ButtonNav(props : ButtonNav){
    return(
        <Button className="buttonNav" {...props}></Button>
    )
}