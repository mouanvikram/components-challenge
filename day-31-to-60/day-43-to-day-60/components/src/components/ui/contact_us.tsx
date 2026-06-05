"use client";

import { ReactNode } from "react";

type ScaleProps = {
  width: number;
  height: number;
  overflow: number;
  children?: ReactNode;
};

const stripes =
  "bg-[repeating-linear-gradient(135deg,transparent_0_6px,rgb(230_230_230)_6px_8px)]";

export function Scales({
  width,
  height,
  overflow = 100,
  children,
}: ScaleProps) {
  // px outside on each side

  const w2 = width + overflow * 2;
  const h2 = height + overflow * 2;
  return (
    <div
      className="relative"
      style={{
        width,
        height,
      }}
    >
      {/* top */}
      <div
        style={{ width: w2 }}
        className={`
            absolute left-1/2 top-0
            h-10 
            -translate-x-1/2 -translate-y-10
            ${stripes}
            mask-[linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]
          `}
      />
      {/* bottom */}
      <div
        style={{
          width: w2,
        }}
        className={`
            absolute left-1/2 bottom-0
            h-10
            -translate-x-1/2 translate-y-10
            ${stripes}
            mask-[linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]
          `}
      />
      {/* left */}
      <div
        style={{
          height: h2,
        }}
        className={`
                absolute left-0 top-1/2
            w-10
            -translate-x-10 -translate-y-1/2
            ${stripes}
            mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]
          `}
      />
      {/* right */}
      <div
        style={{
          height: h2,
        }}
        className={`
            absolute right-0 top-1/2
            w-10 
            translate-x-10 -translate-y-1/2
            ${stripes}
            mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]
          `}
      />
      <div className="w-full h-full">{children}</div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <Scales width={450} height={550} overflow={130}>
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-full h-full  bg-white/80 p-10">
          <h2 className="mb-2 text-3xl font-bold">Contact Us</h2>

          <p className="mb-6 text-sm text-neutral-600">
            Have a project in mind? We'd love to hear from you.
          </p>

          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full rounded-sm border 
                  border-gray-300 px-3 py-2 outline-none focus:ring"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded-sm border 
                  border-gray-300 px-3 py-2 outline-none focus:ring"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-sm border 
                  border-gray-300 px-3 py-2 outline-none focus:ring"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-black px-4 py-2 text-white transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Scales>
  );
}
