'use client'

export default function MessageRecieved() {
  return (
    <div className="w-75 flex flex-col items-start">
        {/* message sender */}
        <div className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-300">
                <img src="../images/mouanvikram.jpg" className="w-full h-full rounded-full object-cover shadow-md" />

            </span>
            <div className="text-sm text-neutral-600">Mouan</div>
        </div>
        {/* message content */}
        <div className="mt-2 p-3 bg-white rounded-b-2xl rounded-tr-2xl rounded-tl-md border border-neutral-200 shadow-sm">
            <p className="text-sm text-gray-800">Hey <span className="text-blue-800 font-semibold">@rudra</span>, I've updated the homepage bento grids.</p>
        </div>
    </div>
  );
}