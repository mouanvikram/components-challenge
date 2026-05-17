'use client'

import clsx from "clsx"
import { motion } from "motion/react"

type ButtonWithShadow = {
    onClick: () => void,
    children: React.ReactNode
}
export function Button({ onClick, children }: ButtonWithShadow) {

    return (
        <motion.div className="px-[2px] py-[2px] rounded-[14px] bg-linear-to-t from-[#313036] to-[#4B4951] shadow-[0px_0px_0px_1px_#0d0d0d] cursor-pointer "
        >
            <div className="px-6 py-2.5 bg-linear-to-b from-[#201E25] to-[#323232] rounded-[12px] text-white">{children}</div>
        </motion.div>
    )
}