import { Button, ButtonProps } from "react-bootstrap";
import { ButtonHTMLAttributes } from "react";
import '../styles/buttonNav.scss'

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonNavProps = ButtonProps
type ButtonNav = ButtonAttributes & ButtonNavProps

export function ButtonNav(props : ButtonNav){
    return(
        <Button className="buttonNav" {...props}></Button>
    )
}