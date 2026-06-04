"use client";

import { cn } from "@/lib/utils";

type LogoProps = { className?: string };

function ZentaVideoLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="currentColor"
      className={cn("h-8 w-auto", className)}
      aria-label="Zenta Video"
    >
      <rect x="0" y="4" width="24" height="24" rx="6" fill="currentColor" />
      <path d="M10 11v10l9-5-9-5z" fill="#f9fafb" />
      <text
        x="34"
        y="22"
        fontSize="16"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="-0.02em"
      >
        Zenta Video
      </text>
    </svg>
  );
}

function MarculLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="currentColor"
      className={cn("h-8 w-auto", className)}
      aria-label="Marcul"
    >
      <circle cx="14" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M7 22V10h3.5l4 8 4-8H22v12h-3v-7.5l-3.8 7.5h-2.4l-3.8-7.5V22H7z" />
      <text
        x="34"
        y="22"
        fontSize="18"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.04em"
      >
        MARCUL
      </text>
    </svg>
  );
}

function NovaraLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 130 32"
      fill="currentColor"
      className={cn("h-8 w-auto", className)}
      aria-label="Novara"
    >
      <path d="M14 4l5 10h10l-8 6 3 10-10-7-10 7 3-10-8-6h10L14 4z" />
      <text
        x="34"
        y="22"
        fontSize="18"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        Novara
      </text>
    </svg>
  );
}

function KlyftLabsLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 150 32"
      fill="currentColor"
      className={cn("h-8 w-auto", className)}
      aria-label="Klyft Labs"
    >
      <rect x="2" y="18" width="10" height="10" rx="2" opacity="0.35" />
      <rect x="8" y="12" width="10" height="16" rx="2" opacity="0.6" />
      <rect x="14" y="6" width="10" height="22" rx="2" />
      <text
        x="32"
        y="22"
        fontSize="17"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        letterSpacing="-0.03em"
      >
        Klyft Labs
      </text>
    </svg>
  );
}

function PrismIOLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 130 32"
      fill="currentColor"
      className={cn("h-8 w-auto", className)}
      aria-label="PrismIO"
    >
      <path d="M14 4L26 26H2L14 4z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M14 10l4 8h-8l4-8z" opacity="0.5" />
      <text
        x="34"
        y="22"
        fontSize="18"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        PrismIO
      </text>
    </svg>
  );
}

function VeluneLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      className={cn("h-8 w-auto", className)}
      aria-label="Velune"
    >
      <path
        d="M2 20c4-8 8-12 12-12s8 4 12 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M2 24c4-6 8-8 12-8s8 2 12 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <text
        x="34"
        y="22"
        fill="currentColor"
        fontSize="18"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="-0.02em"
      >
        Velune
      </text>
    </svg>
  );
}

const LOGOS = [
  { id: "zenta", Logo: ZentaVideoLogo },
  { id: "marcul", Logo: MarculLogo },
  { id: "novara", Logo: NovaraLogo },
  { id: "klyft", Logo: KlyftLabsLogo },
  { id: "prism", Logo: PrismIOLogo },
  { id: "velune", Logo: VeluneLogo },
] as const;

function LogoRow({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {LOGOS.map(({ id, Logo }) => (
        <div
          key={`${keyPrefix}-${id}`}
          className="flex shrink-0 items-center justify-center px-10 text-neutral-900 grayscale"
        >
          <Logo />
        </div>
      ))}
    </>
  );
}

export function LogoCloud() {
  return (
    <section className="w-full max-w-3xl rounded-2xl border border-neutral-200/80 bg-neutral-50 px-8 py-12 shadow-sm">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Trusted by people who build future
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-lg leading-relaxed text-neutral-500 sm:text-base">
          MDesign is trusted by leading teams from Generative AI Companies,
          Hosting Providers, Payments Providers, Streaming Providers
        </p>
      </div>

      <div className="logo-cloud-fade relative mt-10 overflow-hidden">
        <div className="flex w-max animate-logo-marquee">
          <div className="flex items-center">
            <LogoRow keyPrefix="a" />
          </div>
          <div className="flex items-center" aria-hidden>
            <LogoRow keyPrefix="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
