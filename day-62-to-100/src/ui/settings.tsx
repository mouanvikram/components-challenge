"use client";

import {
  Lock,
  CircleDashed,
  WandSparkles,
  SlidersHorizontal,
} from "lucide-react";

const options = [
    {
        icon: Lock,
        title: 'Internal Only',
        desc: "Only members can see this task",
    },
    {
        icon: CircleDashed,
        title: 'Optional',
        desc: "Participants can skip this task",
    },

    {
        icon: WandSparkles,
        title: 'Autocomplete',
        desc: "Automatically complete this task based on the object property",
    },
    {
        icon: SlidersHorizontal,
        title: 'Conditional Visibility',
        desc: "Hide or show this task based on the object property",
    },
    
]

export default function Settings() {
    return (
        <div className="w-sm bg-white rounded-xl shadow-sm p-4">

        </div>
    )
}
