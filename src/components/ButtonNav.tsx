import { Button } from "react-bootstrap";
import { ButtonHTMLAttributes } from "react";
import '../styles/buttonNav.scss'

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonNavProps = { variant ?: string , size: "sm" | "lg" | undefined}
type ButtonNav = ButtonAttributes & ButtonNavProps

export function ButtonNav(props : ButtonNav){
    return(
        <Button className="buttonNav" {...props}></Button>
    )
}