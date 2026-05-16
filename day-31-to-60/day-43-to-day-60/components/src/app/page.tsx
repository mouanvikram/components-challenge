import { Button } from "@/components/ui/buttons";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button>
        Default
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>
    </main>
  )
}