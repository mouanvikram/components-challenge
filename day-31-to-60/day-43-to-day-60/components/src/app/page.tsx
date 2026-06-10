"use client";

import TransactionCards from "@/components/ui/transaction_cards";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-6 bg-gray-50">
      <TransactionCards />
    </main>
  );
}
