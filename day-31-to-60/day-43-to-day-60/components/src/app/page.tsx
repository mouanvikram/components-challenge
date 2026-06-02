"use client";

import ClickSpark from "@/components/ui/click_spark";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="font-bold text-gray-300">Click For Spark</h1>
      <ClickSpark></ClickSpark>
    </main>
  );
}
