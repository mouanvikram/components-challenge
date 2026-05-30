'use client'
import { Button } from "@/components/ui/button_with_shadows"
import { ToastStack } from "@/components/ui/toast"
import { ShreddingMachine } from "@/components/ui/shredding_machine"
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50">
    
      <ShreddingMachine />
    </main >
  )
}