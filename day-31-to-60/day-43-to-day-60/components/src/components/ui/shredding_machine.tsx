"use client";

export function ShreddingMachine() {
  return (
    <div className="bg-white max-w-sm rounded-2xl shadow-md">
      <div className="flex flex-col items-center gap-1">
        <img
          className="w-70 h-auto "
          src="/images/shredding_machine_2.png"
          alt="shredding machine"
        />
        <div className="px-6 pb-6 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Delete this document?
          </h2>
          <h3 className="text-gray-500 text-center ">
            If you delete this document, it will be permanently removed.
          </h3>
        </div>
        <div className="w-full border-t border-gray-300"></div>
        <div className="flex flex-row items-center gap-5 w-full justify-around p-6">
          <button className="w-1/2 py-3  border border-gray-200 text-center rounded-2xl text-gray-600 cursor-pointer hover:bg-gray-100">
            Cancel
          </button>
          <button className="w-1/2 bg-red-400 py-3 text-white rounded-2xl cursor-pointer hover:bg-red-500">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
