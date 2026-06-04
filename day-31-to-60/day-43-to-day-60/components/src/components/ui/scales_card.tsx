export default function FramedCard() {
  const stripes =
    "bg-[repeating-linear-gradient(135deg,transparent_0_6px,rgb(229_231_235)_6px_8px)]";

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        {/* Top */}
        <div
          className={`
            absolute left-1/2 top-0
            h-10 w-[520px]
            -translate-x-1/2 -translate-y-16
            ${stripes}
            [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
          `}
        />

        {/* Bottom */}
        <div
          className={`
            absolute left-1/2 bottom-0
            h-10 w-[520px]
            -translate-x-1/2 translate-y-16
            ${stripes}
            [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
          `}
        />

        {/* Left */}
        <div
          className={`
            absolute left-0 top-1/2
            w-10 h-[520px]
            -translate-x-16 -translate-y-1/2
            ${stripes}
            [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          `}
        />

        {/* Right */}
        <div
          className={`
            absolute right-0 top-1/2
            w-10 h-[520px]
            translate-x-16 -translate-y-1/2
            ${stripes}
            [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          `}
        />

        {/* Center */}
        <div className="relative z-10 h-[350px] w-[300px] border border-neutral-200">
          {/* Content */}
        </div>
      </div>
    </div>
  );
}