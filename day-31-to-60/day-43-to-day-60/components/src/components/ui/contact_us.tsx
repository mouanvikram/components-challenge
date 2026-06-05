"use client";

import { ReactNode } from "react";

type ScaleProps = {
  width: number;
  height: number;
  children?: ReactNode;
};

const stripes =
  "bg-[repeating-linear-gradient(135deg,transparent_0_6px,rgb(230_230_230)_6px_8px)]";

export function Scales({ width, height, children }: ScaleProps) {
    const w2 = width*2.5;
    const h2 = height*2.5;
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
        style={{width:w2}}
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
        width: w2
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
        height: h2
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
          height: h2
        }}
        className={`
            absolute right-0 top-1/2
            w-10 
            translate-x-10 -translate-y-1/2
            ${stripes}
            mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]
          `}
      />
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
