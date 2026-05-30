'use client'

import clsx from "clsx"
import { motion } from "motion/react"

type ButtonWithShadow = {
    onClick: () => void,
    children: React.ReactNode
}
export function Button({ onClick, children }: ButtonWithShadow) {

    return (
        <motion.div className="p-0.5 rounded-[14px] bg-linear-to-t from-[#313036] to-[#4B4951] shadow-[0px_0px_0px_1px_#0d0d0d] cursor-pointer"
            whileTap={{
                scale: 0.95,
            }}
            transition={{
                ease: "linear",
                duration: 0.1
            }}
        >
            <motion.div className="px-10 py-2.5 bg-linear-to-b from-[#201E25] to-[#323232] rounded-xl text-gray-300"
                whileTap={{
                    scale: 1.02
                }}

                transition={{
                    ease: "linear",
                    duration: 0.1
                }}>{children}</motion.div>
        </motion.div>
    )
}