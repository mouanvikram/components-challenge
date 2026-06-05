"use client";

import { Scales } from "@/components/ui/contact_us";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50">
      <Scales width={450} height={450} overflow={130}/>
    </main>
  );
}
