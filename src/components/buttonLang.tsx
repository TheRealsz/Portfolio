import { Button } from "react-bootstrap";
import { ButtonHTMLAttributes } from "react";
import '../styles/buttonLang.scss'

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonLangProps = { variant ?: string , size: "sm" | "lg" | undefined}
type ButtonLang = ButtonAttributes & ButtonLangProps

export function ButtonLang(props : ButtonLang){
    return(
        <Button className="buttonLang" {...props}></Button>
    )
}