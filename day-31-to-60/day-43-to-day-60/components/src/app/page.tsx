"use client";

import MessageRecieved from "@/components/ui/message_recieved";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-6 bg-gray-50">
      <MessageRecieved />
    </main>
  );
}
