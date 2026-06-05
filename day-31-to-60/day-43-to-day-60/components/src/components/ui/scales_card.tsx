export default function FramedCard() {
  const stripes =
    "bg-[repeating-linear-gradient(135deg,transparent_0_6px,rgb(230_230_230)_6px_8px)]";

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        {/* Top */}
        <div
          className={`
            absolute left-1/2 top-0
            h-10 w-150
            -translate-x-1/2 -translate-y-15
            ${stripes}
            mask-[linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]
          `}
        />

        {/* Bottom */}
        <div
          className={`
            absolute left-1/2 bottom-0
            h-10 w-150
            -translate-x-1/2 translate-y-15
            ${stripes}
            mask-[linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]
          `}
        />

        {/* Left */}
        <div
          className={`
            absolute left-0 top-1/2
            w-10 h-150
            -translate-x-15 -translate-y-1/2
            ${stripes}
            mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]
          `}
        />

        {/* Right */}
        <div
          className={`
            absolute right-0 top-1/2
            w-10 h-150
            translate-x-15 -translate-y-1/2
            ${stripes}
            mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]
          `}
        />

        {/* Center */}
        <div className="relative z-10 h-87.5 w-75 p-3">
          <div className="w-full h-10 flex justify-around">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-10"
            >
              <path
                d="M20 95V25L60 75L100 25V95"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export function LoginForm() {
  return (
    <form className="w-full max-w-sm space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:ring-2"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="••••••••••••••••"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:opacity-90"
      >
        Sign In
      </button>

      <p className="text-center text-sm text-zinc-500">
        Don't have an account?{" "}
        <a href="#" className="font-medium underline">
          Sign up
        </a>
      </p>
    </form>
  );
}
