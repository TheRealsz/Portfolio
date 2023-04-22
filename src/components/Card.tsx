import {ReactNode} from 'react'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import '../styles/card.scss'

type CardProps = {  
    children: ReactNode
}

export function Card(props : CardProps) {
    // const x = useMotionValue(0)
    // const y = useMotionValue(0)
    // const rotateX = useTransform(y, [-100, 100], [30, -30])
    // const rotateY = useTransform(x, [-100, 100], [-30, 30])
    return (
        <div className="card">
            <div className="box">
                {props.children}
                    {/* <motion.img style={{x, y, rotateX, rotateY, z:100}}
                    drag
                    dragElastic={0.18}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: 'grabbing' }}
                    src={test} /> */}
            </div>
        </div>
    )
}