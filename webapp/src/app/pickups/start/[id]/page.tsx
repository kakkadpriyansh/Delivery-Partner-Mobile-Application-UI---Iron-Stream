import Link from "next/link";
import { notFound } from "next/navigation";

const orders = {
  "12345": { name: "Alice Johnson", addr: "123 Main Street", distance: "1.2 km" },
  "12346": { name: "Bob Smith", addr: "456 Oak Avenue", distance: "3.1 km" },
  "12347": { name: "Charlie Davis", addr: "789 Pine Street", distance: "2.4 km" },
} as const;

export default function StartPickup({ params }: { params: { id: string } }) {
  const order = orders[params.id as keyof typeof orders];
  if (!order) return notFound();
  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2">Pickup in Progress</h2>
      <div className="h-40 rounded bg-gray-100" />
      <div className="mt-3 text-xs text-gray-600">Distance: {order.distance}</div>
      <div className="mt-4 border rounded p-3">
        <p className="text-sm font-medium">{order.name}</p>
        <p className="text-xs text-gray-500">{order.addr}</p>
        <div className="mt-2 flex gap-2">
          <button className="text-xs border rounded px-2 py-1">Call</button>
          <Link href={`/pickups/confirm/${params.id}`} className="text-xs bg-blue-600 text-white px-3 py-1 rounded">Confirm</Link>
        </div>
      </div>
      <button className="mt-4 w-full text-xs bg-gray-200 rounded py-2">Request Location</button>
    </div>
  );
}