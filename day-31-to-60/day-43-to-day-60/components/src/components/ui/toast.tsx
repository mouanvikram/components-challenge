"use client"

import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type ToastItem = {
    id: string
    number: number
}

const PEEK_OFFSET = 14
const MAX_VISIBLE = 5
const CARD_HEIGHT = 72
const DISMISS_MS = 3000

function ToastViewport({ toasts }: { toasts: ToastItem[] }) {
  if (toasts.length === 0) return null

  const minHeight = CARD_HEIGHT + (toasts.length - 1) * PEEK_OFFSET

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ul
        className="relative w-[320px]"
        style={{ minHeight }}
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((toast, index) => (
            <motion.li
              key={toast.id}
              layout
              className={cn(
                "absolute right-0 bottom-0 w-full",
                "rounded-xl border border-gray-200 bg-white shadow-lg",
                "px-4 py-3 pointer-events-auto"
              )}
              style={{
                zIndex: toasts.length - index,
                filter: `blur(${index * 0.4}px)`
              }}
              initial={{ x: 80, opacity: 0, y: 0, scale: 1 }}
              animate={{
                x: 0,
                opacity: index < MAX_VISIBLE ? toasts.length - index* 0.55 : 0,
                y: -index * PEEK_OFFSET,
                scale: 1 - index * 0.04,
              }}
              exit={{ x: 40, opacity: 0, transition: { duration: 0.2 ,},zIndex: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            >
              <p className="text-sm font-medium text-gray-900">
                Toast #{toast.number}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                Notification {toast.number}
              </p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  )
}

export function ToastStack() {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const counterRef = useRef(0)
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  const removeToast = useCallback((id: string) => {
    const timer = timersRef.current.get(id)
    if (timer) {
      clearTimeout(timer)
      timersRef.current.delete(id)
    }
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const addToast = useCallback(() => {
    counterRef.current += 1
    const id = crypto.randomUUID()
    const number = counterRef.current

    setToasts((prev) => {
      const next = [{ id, number }, ...prev]
      return next.slice(0, MAX_VISIBLE)
    })

    const timer = setTimeout(() => removeToast(id), DISMISS_MS)
    timersRef.current.set(id, timer)
  }, [removeToast])

  useEffect(() => {
    const timers = timersRef.current
    return () => {
      timers.forEach((timer) => clearTimeout(timer))
      timers.clear()
    }
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={addToast}
        className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer "
      >
        Show toast
      </button>
      <ToastViewport toasts={toasts} />
    </>
  )
}
