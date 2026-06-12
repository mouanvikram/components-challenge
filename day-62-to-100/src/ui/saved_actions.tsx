"use client";

import {
  Home,
  Droplet,
  GraduationCap,
  HandHeart,
  ChevronRight,
  Plus,
  Zap,
} from "lucide-react";

const actions = [
  {
    icon: Home,
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    title: "Rent Payment",
    description: "Monthly rent payment.",
    amount: "$940.00",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    title: "Natalia's Tuition",
    description: "Nat's university fee.",
    amount: "$750.00",
  },
  {
    icon: HandHeart,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-700",
    title: "Donation to TEMA",
    description: "In the name of our family.",
    amount: "$100.00",
  },
  {
    icon: Droplet,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-700",
    title: "Gas Bill Payment",
    description: "Monthly gas bill payment.",
    amount: "$48.00",
  },
];

type Action = (typeof actions)[number];
function ActionItem({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  amount,
}: Action) {
    return <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
            <div className={`p-3 rounded-full border border-gray-300`}>
                <Icon size={18} className={`text-gray-700`} />
            </div>
            <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-700">{title}</h3>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </div>
        <div className="flex items-center">
            
        <span className="text-xs  text-gray-600 border px-3 py-1 border-gray-300 rounded-full">{amount}</span>
        <ChevronRight size={18} className="text-gray-400 ml-2" />
        </div>
    </div>
}

export default function SavedActions() {
  return (
    <div className="w-sm  bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center">
        <div className="flex items-center">
          <Zap size={16} className="text-neutral-500" />
          <h2 className="text-sm font-medium text-gray-800 ml-2">
            Saved Actions
          </h2>
        </div>

        <button className="ml-auto text-xs border border-neutral-300  px-3 py-1.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
          See All
        </button>
      </div>
      <div className="border-t border-neutral-200 mt-3"></div>
      {actions.map((action, index) => {
        return <ActionItem {...action} />;
      })}
      <button className="w-full text-[14px] border border-neutral-300  px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center gap-4">
        <Plus size={18} className="text-gray-700" />
        <span className="">Add New Action</span>
      </button>
    </div>
  );
}
