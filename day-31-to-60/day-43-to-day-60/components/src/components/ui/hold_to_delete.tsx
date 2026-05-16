"use client"
import { motion } from "motion/react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Trash2 } from "lucide-react"
import clsx from "clsx"

type HoldToDeleteProps = {
    onDelete: () => void
    children: React.ReactNode
}

export function HoldToDelete({ onDelete, children }: HoldToDeleteProps) {
    const [progress, setProgress] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const startDeleting = () => {
        setIsDeleting(true)
        let currentProgress = 0
        intervalRef.current = setInterval(() => {
            currentProgress += 4
            setProgress(currentProgress)
            if (currentProgress >= 100) {
                // stopDeleting()
                onDelete()
            }
        }, 20)
    }
    const stopDeleting = () => {
        setIsDeleting(false)
        if (intervalRef.current) clearInterval(intervalRef.current)
        setProgress(0)
    }



    return (
        <motion.button className={clsx("relative p-2 px-4 rounded-2xl bg-gray-100 overflow-hidden flex items-center gap-2", isDeleting && "text-white color-multiply")}
            onMouseDown={startDeleting}
            onMouseUp={stopDeleting}
            onMouseLeave={stopDeleting}
            whileTap={{ scale: 0.95 }}

        >   
            {children}
            <motion.div
                className="absolute inset-y-0 left-0 bg-red-500 -z-1 "
                animate={{
                    width: `${progress}%`,
                }}
                transition={{
                    ease: "linear",
                }}
            />
        </motion.button>
    )
}