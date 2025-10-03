import Link from "next/link";

export default function DropToHub() {
  return (
    <div className="p-4">
      <h2 className="font-semibold">Drop To Hub</h2>
      <div className="mt-3 border rounded p-3">
        <p className="text-sm font-medium">Main Processing Hub</p>
        <p className="text-xs text-gray-500">123 Hub Street, City</p>
        <button className="mt-2 text-xs bg-gray-200 rounded px-3 py-1">Open in Maps</button>
      </div>
      <div className="mt-4">
        <p className="text-xs text-gray-600">Orders to Drop</p>
        <div className="mt-2 border rounded p-2 text-xs">Order ID: #12345 — John Smith</div>
        <div className="mt-2 border rounded p-2 text-xs">Order ID: #12346 — Emily Johnson</div>
      </div>
      <Link href="/hub/delivered" className="mt-4 w-full inline-flex justify-center items-center bg-blue-600 text-white rounded-md py-2 text-sm">Delivered to Hub</Link>
    </div>
  );
}