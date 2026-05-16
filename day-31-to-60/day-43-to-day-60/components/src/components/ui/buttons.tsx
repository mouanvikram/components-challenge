"use client"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "motion/react" 
import type { HTMLMotionProps as MotionProps } from "motion/react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:opacity-80",

        outline:
          "border border-zinc-300 hover:bg-zinc-100",

        ghost:
          "hover:bg-zinc-100",
      },

      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

type ButtonProps = MotionProps<"button"> &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {props.children}
    </motion.button>
  )
}