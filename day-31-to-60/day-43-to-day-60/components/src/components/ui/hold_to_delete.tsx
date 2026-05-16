"use client"

import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Trash2 } from "lucide-react"

type HoldToDeleteProps = {
    onDelete: () => void
    children: React.ReactNode
}

export function HoldToDelete({ onDelete, children }: HoldToDeleteProps) {
    const [progress, setProgress] = useState(0)
    const [overlayWidth, setOverlayWidth] = useState<number | undefined>()
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const isComplete = progress >= 100

    // Track live button width as it shrinks
    useEffect(() => {
        if (!buttonRef.current) return
        const ro = new ResizeObserver(entries => {
            setOverlayWidth(entries[0].borderBoxSize[0].inlineSize)
        })
        ro.observe(buttonRef.current)
        return () => ro.disconnect()
    }, [])

    const startDeleting = () => {
        let currentProgress = 0
        intervalRef.current = setInterval(() => {
            currentProgress += 4
            setProgress(currentProgress)
            if (currentProgress >= 100) {
                clearInterval(intervalRef.current!)
                setProgress(100)
                onDelete()
            }
        }, 50)
    }

    const stopDeleting = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setProgress(0)
    }

    return (
        <motion.button
            ref={buttonRef}
            className="relative overflow-hidden rounded-2xl bg-gray-100 px-6 py-2.5 cursor-pointer"
            onMouseDown={startDeleting}
            onMouseUp={stopDeleting}
            onMouseLeave={stopDeleting}
            whileTap={{ scale: 0.96 }}
        >

            {/* Base layer — black icon + text */}
            <motion.div className="relative flex items-center justify-center overflow-hidden"
            animate={{
                gap: isComplete ? "0px" : "8px"
            }}>
                <motion.div
                    className="shrink-0"
                    animate={{ color: isComplete ? "transparent" : "black" }}
                    transition={{ duration: 0.15 }}
                >
                    <Trash2 size={18} />
                </motion.div>

                <motion.div
                    className="overflow-hidden whitespace-nowrap"
                    animate={{
                        maxWidth: isComplete ? 0 : 200,
                        opacity: isComplete ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 ,delay:0.25}}
                >
                    <span className="text-black">{children}</span>
                </motion.div>
            </motion.div>

            {/* Red fill background */}
            <motion.div
                className="absolute inset-y-0 left-0 bg-red-100 rounded-md"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
            />

            {/* Red overlay layer — clipped to fill width */}
            <motion.div
                className="absolute inset-y-0 left-0 overflow-hidden"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
            >
              
                <motion.div
                    className="absolute inset-y-0 left-0 flex items-center justify-center"
                    animate={{
                        gap: isComplete ? "0px" : "8px"
                    }}
                    style={{ width: overlayWidth }}
                >
                    <Trash2 size={18} className="shrink-0 text-red-500" />
                    <motion.div
                        className="overflow-hidden whitespace-nowrap"
                        animate={{
                            maxWidth: isComplete ? 0 : 200,
                            opacity: isComplete ? 0 : 1,
                        }}
                        transition={{ duration: 0.3,delay:0.25 }}
                    >
                        <span className="text-red-500">{children}</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.button>
    )
}