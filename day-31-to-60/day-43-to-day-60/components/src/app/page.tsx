'use client'
import { Button } from "@/components/ui/button_with_shadows"
import { HoldToDelete } from "@/components/ui/hold_to_delete"
import { Trash2 } from "lucide-react"
export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">

      {/* <HoldToDelete onDelete={() => console.log("onDelete")}>

      Hold to delete
    </HoldToDelete> */}
      <Button onClick={() => console.log("button clicked")} >
        Accept
      </Button>
    </main >
  )
}