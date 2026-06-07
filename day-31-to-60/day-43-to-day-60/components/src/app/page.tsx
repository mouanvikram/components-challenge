"use client";

import { DocxIcon } from "@/components/ui/docx_icon";
import { MarkdownIcon } from "@/components/ui/markdown_icon";
import { PDFIcon } from "@/components/ui/pdf_icon";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-6 bg-gray-50">
      <PDFIcon />
      <MarkdownIcon />
      <DocxIcon />
    </main>
  );
}
