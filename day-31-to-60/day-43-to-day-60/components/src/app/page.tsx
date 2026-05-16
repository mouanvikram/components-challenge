'use client'
import { HoldToDelete } from "@/components/ui/hold_to_delete"
import { Trash2 } from "lucide-react"
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">

    <HoldToDelete onDelete={() => console.log("onDelete")}>
      <Trash2
      className="w-4 h-4" />
      Hold to delete
    </HoldToDelete>
    </main>
  )
}