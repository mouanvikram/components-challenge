"use client";

import { useEffect, useState } from "react";

const DIGIT_HEIGHT = 64;

function SpinnerDigit({ digit }: { digit: number }) {
  const [offset, setOffset] = useState(digit);

  useEffect(() => {
    setOffset((prev) => {
      const currentCycle = Math.floor(prev / 10);
      return currentCycle * 10 + digit;
    });
  }, [digit]);

  return (
    <div
      className="overflow-hidden"
      style={{
        height: DIGIT_HEIGHT,
        width: 40,
      }}
    >
      <div
        className="transition-transform duration-500 ease-out"
        style={{
          transform: `translateY(-${offset * DIGIT_HEIGHT}px)`,
        }}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center font-bold text-5xl"
            style={{
              height: DIGIT_HEIGHT,
            }}
          >
            {i % 10}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NumberSpinner() {
  const [input, setInput] = useState("12345");
  const [value, setValue] = useState(12345);

  const digits = value
    .toString()
    .padStart(6, "0")
    .split("")
    .map(Number);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex rounded-2xl bg-white p-6 shadow-sm">
        {digits.map((digit, index) => (
          <SpinnerDigit
            key={index}
            digit={digit}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none"
        />

        <button
          onClick={() => setValue(Number(input))}
          className="
            px-8
            py-6
            rounded-3xl
            bg-linear-to-b
            from-gray-50
            to-gray-100
            shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.3),0_2px_2px_rgba(0,0,0,0.11)]
            active:translate-y-px
            transition-all
            font-medium
          "
        >
          Change Value
        </button>
      </div>
    </div>
  );
}