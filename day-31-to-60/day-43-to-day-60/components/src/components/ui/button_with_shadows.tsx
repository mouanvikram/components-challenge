'use client'

import clsx from "clsx"
import { motion } from "motion/react"
import { ReactNode } from "react"

type ButtonWithShadow = {
    onClick: () => void,
    children: React.ReactNode
}
export function Button({ onClick, children }: ButtonWithShadow) {

    return (
        <motion.div className={clsx([])}>

        </motion.div>
    )
}