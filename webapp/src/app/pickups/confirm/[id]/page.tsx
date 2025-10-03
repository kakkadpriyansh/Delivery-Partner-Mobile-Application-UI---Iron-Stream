import Link from "next/link";

export default function PickupConfirm({ params }: { params: { id: string } }) {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-3">
        <h2 className="font-semibold">Confirm</h2>
        <span className="text-xs text-gray-500">Order #{params.id}</span>
      </header>

      <div className="text-xs text-gray-600 mb-2">Upload Clothes Photos</div>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square rounded border flex items-center justify-center text-xs text-gray-400">+
          </div>
        ))}
      </div>

      <Link href="/hub/drop" className="mt-4 w-full inline-flex justify-center items-center bg-blue-600 text-white rounded-md py-2 text-sm">Confirm & Proceed</Link>
    </div>
  );
}