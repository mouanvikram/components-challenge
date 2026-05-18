'use client'
import { Button } from "@/components/ui/button_with_shadows"
import { ToastStack } from "@/components/ui/toast"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <Button onClick={() => console.log("button clicked")} >
        Accept
      </Button>
      <ToastStack />
    </main >
  )
}