import Link from "next/link";

export default function DeliveryDetails({ params }: { params: { id: string } }) {
  return (
    <div className="p-4">
      <h2 className="font-semibold">Delivery Details</h2>
      <div className="mt-3 border rounded p-3">
        <p className="text-sm font-medium">John Smith</p>
        <p className="text-xs text-gray-500">123 Main St, Springfield</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs">+91-456-78-790</span>
          <button className="text-xs border rounded px-2 py-1">Call</button>
        </div>
      </div>

      <div className="mt-3 h-40 rounded bg-gray-100" />
      <div className="mt-2 text-[10px] text-gray-600">ETA: 15 mins (3.2 km)</div>

      <div className="mt-4 border rounded p-3">
        <p className="text-xs">Order Items</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs">2 Shirts</span>
          <span className="text-xs">Rs250.00 each</span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-xs">1 Bedsheet</span>
          <span className="text-xs">Rs250.00</span>
        </div>
        <p className="mt-2 text-[10px]">Total Price: Rs750.00</p>
      </div>

      <Link href={`/delivery/${params.id}?deliver=start`} className="mt-4 w-full inline-flex justify-center items-center bg-blue-600 text-white rounded-md py-2 text-sm">Start Delivery</Link>
    </div>
  );
}