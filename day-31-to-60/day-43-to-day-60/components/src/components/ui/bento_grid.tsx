"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import Image from "next/image";

import {
  AtSign,
  Smile,
  Paperclip,
} from "lucide-react";

function Card({
  className,
  title,
  desc,
  children,
}: {
  className: string;
  title: string;
  desc: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "p-8 rounded-xl",
        "border border-gray-300 shadow-sm",
        "bg-white",
        "md:row-span-2 md:col-span-1 flex flex-col",
        className,
      )}
    >
      <h1 className="text-gray-900 font-semibold">{title}</h1>
      <p className="mt-3 text-[15px] text-gray-600">{desc}</p>
      <div className="flex-1 relative">{children}</div>
    </div>
  );
}

type FileCardProps = {
  fileName: string;
  downloaded: number;
  total: number;
};

function FileCard({ fileName, downloaded, total }: FileCardProps) {
  const progress = (downloaded / total) * 100;

  return (
    <div className=" z-10 rounded-3xl border border-neutral-200 bg-white px-5 py-3 shadow-md ">
      <div className="flex items-center gap-4">
        {/* PDF Icon */}
        <div className="flex h-5 w-5 items-center justify-center">
          <div className="rounded-md bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
            PDF
          </div>
        </div>

        <div className="min-w-0 flex-1">
          {/* Filename */}
          <p className="truncate text-sm font-semibold text-black">
            {fileName}
          </p>

          {/* Progress */}
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Size */}
          <p className="mt-2 text-sm text-neutral-500">
            {downloaded} KB / {total}KB
          </p>
        </div>
      </div>
    </div>
  );
}

function ShareCard() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-3 shadow-sm">
      <p className="text-[15px] leading-relaxed">
        <span className="font-semibold text-indigo-500">@mouanvikram</span>
        <span className="ml-1 text-neutral-700">Shared 2 invoices</span>
      </p>

      <div className="mt-6 flex items-center gap-5 text-neutral-500">
        <AtSign className="h-5 w-5" strokeWidth={2} />
        <Smile className="h-5 w-5" strokeWidth={2} />
        <Paperclip className="h-5 w-5" strokeWidth={2} />
      </div>
    </div>
  );
}

function Scales() {
  return (
    <div
      className="absolute inset-0 mt-2  bg-[repeating-linear-gradient(135deg,transparent_0_6px,rgb(229_231_235)_6px_8px)]
            mask-[radial-gradient(ellipse_at_center,black_1%,transparent_100%)]
            "
    ></div>
  );
}
export function CardStack() {
  return (
    <div className="relative h-85 w-full overflow-hidden">
      {/* Fade the entire stack */}
      <div
        className="
          absolute inset-0
        "
      >
        {/* Card 4 */}
        <div className="absolute inset-x-6 top-8 h-65 rounded-[28px] border border-neutral-200 bg-white" />

        {/* Card 3 */}
        <div className="absolute inset-x-4 top-10 h-65 rounded-[28px] border border-neutral-200 bg-white" />

        {/* Card 2 */}
        <div className="absolute inset-x-2 top-12 h-65 rounded-[28px] border border-neutral-200 bg-white" />

        {/* Main Card */}
        <div
          className="absolute inset-x-0 top-14 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm 
          mask-[linear-gradient(to_bottom,black_75%,transparent_100%)]"
        >
          <div className="inline-block bg-amber-100 px-1">
            <h3 className=" font-semibold text-amber-900">Spending Limit</h3>
          </div>

          <p className="mt-2 text-sm text-neutral-500">
            New users by First user primary channel group
          </p>

          <div className="mt-3 h-6 overflow-hidden rounded-md bg-neutral-100">
            <div className="flex h-full">
              <div className="w-[20%] bg-indigo-900" />
              <div className="w-[20%] bg-indigo-500" />

              <div
                style={{
                  background:
                    "repeating-linear-gradient(115deg, transparent 0px, transparent 2px, rgb(209 213 219) 2px, rgb(209 213 219) 3px)",
                }}
                className="
                  flex-1
                "
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2">
            <div>
              <div className="text-xl font-semibold">40%</div>
              <div className="mt-2  text-neutral-500">Used</div>
            </div>

            <div>
              <div className="text-xl font-semibold">60%</div>
              <div className="mt-2 text-xl text-neutral-500">Free</div>
            </div>
          </div>
          
            <div className="mt-4 border-t border-neutral-100 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
                <span className="text-sm font-medium text-neutral-600">
                  Running <span className="text-neutral-400">(20%)</span>{" "}
                  average of 12 Minutes
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-200" />
                <span className="text-sm font-medium text-neutral-400">
                  Swimming <span className="text-neutral-300">(20%)</span>
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export function TimelineCard() {
  return (
    <div
      className="
        relative w-full h-75
        bg-[repeating-linear-gradient(
          -45deg,
          transparent_0px,
          transparent_12px,
          rgb(245,245,245)_12px,
          rgb(245,245,245)_13px
        )]
      "
    >
      {/* Timeline line */}
      <div className="absolute left-7 top-10 bottom-6 w-px bg-neutral-200" />

      {/* Top Event */}
      <div className="absolute left-0 top-10 flex">
        <div className="relative w-14">
          <div className="absolute left-6 top-5 h-2.5 w-2.5 rounded-full border border-black bg-white" />
        </div>

        <div>
          <p className="text-[11px] text-[#6b7280]">06 AM</p>
          <p className="mt-1 text-[12px] font-medium text-black">
            Poll Created
          </p>
        </div>
      </div>

      {/* Middle Card */}
      <div className="absolute left-1 top-22 rounded-3xl border border-neutral-200 bg-white p-5  shadow-sm">
        <p className="text-[14px] text-[#6b7280]">12 PM</p>

        <div className="mt-1 flex">
          {[
            1,2,3,4
          ].map((_, i) => (
            <div
              key={i}
              className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white"
              style={{ marginLeft: i === 0 ? 0 : -8 }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-100"></div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full border border-[#4f46e5] bg-[#4f46e5]" />
          <p className="text-[15px] font-medium text-black">
            +50 Users voted
          </p>
        </div>
      </div>

      {/* Bottom Event */}
      <div className="absolute left-0 top-64 flex">
        <div className="relative w-14">
          <div className="absolute left-6 top-7 h-2.5 w-2.5 rounded-full border border-black bg-white" />
        </div>

        <div>
          <p className="text-[12px] text-[#6b7280]">12:30 PM</p>
          <p className="mt-1 text-[12px] font-medium text-black">
            Poll Closed
          </p>
        </div>
      </div>
    </div>
  );
}
export default function BentoGrid() {
  return (
    <div className="max-w-5xl p-6">
      <div className="grid auto-rows-[150px] md:grid-cols-3 gap-3">
        <Card
          className=""
          title="Scheduled Reports"
          desc="Automate report delivery to stakeholders with customizable scheduling options."
        >
          <Scales />
          <div className="absolute inset-0 flex items-center justify-center">
            <FileCard downloaded={39} fileName="react_motion.pdf" total={120} />
          </div>
        </Card>
        <Card
          className=""
          title="Collaborative Analysis"
          desc="Add comments, share insights, and work together with your team to extract maximum."
        >
          <Scales />
          <div className="absolute inset-0  z-10 flex items-center justify-center">
            <div className="relative w-[80%] h-[50%]">
              {["Payment received", "Report exported", "New comment added"].map(
                (text, i) => (
                  <div
                    key={text}
                    className={cn(
                      "absolute w-48 rounded-xl border border-gray-50 bg-white p-3 shadow-sm",
                      i == 2 && "border-green-200 border-2",
                    )}
                    style={{
                      top: `${i * 24}px`,
                      left: `${i * 16}px`,
                    }}
                  >
                    <p className="text-sm">{text}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </Card>
        <Card
          className=""
          title="Collaborative Analysis"
          desc="Add comments, share insights, and work together with your team to extract maximum."
        >
          <Scales />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <ShareCard />
          </div>
        </Card>
        <Card
          className="md:row-span-3"
          title="Collaborative Analysis"
          desc="Add comments, share insights, and work together with your team to extract maximum."
        >
          <Scales />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <TimelineCard/>
          </div>
        </Card>
        <Card
          className="md:row-span-3 md:col-span-2"
          title="Collaborative Analysis"
          desc="Add comments, share insights, and work together with your team to extract maximum."
        >
            <Scales/>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <CardStack />
          </div>
        </Card>
      </div>
    </div>
  );
}
