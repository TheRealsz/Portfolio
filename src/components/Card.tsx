import { ReactNode } from 'react'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import '../styles/card.scss'

type CardProps = {
    children: ReactNode
}

export function Card(props: CardProps) {
    return (
        <motion.div whileHover={{ translateY: -20 }} className="card">
            <div className="box">
                {props.children}
            </div>
        </motion.div>
    )
}

// Adicionar animacao diferente?