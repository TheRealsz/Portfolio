import { ReactNode } from 'react'
import '../styles/card.scss'

type CardProps = {
    children: ReactNode
}

export function Card(props: CardProps) {
    return (
        <div className="card">
            <div className="box">
                {props.children}
            </div>
        </div>
    )
}
