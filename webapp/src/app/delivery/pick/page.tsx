import Link from "next/link";

export default function PickForDelivery() {
  const orders = [
    { id: "56789", selected: false },
    { id: "56800", selected: false },
    { id: "56801", selected: false },
  ];
  return (
    <div className="p-4">
      <h2 className="font-semibold">Pick for Delivery</h2>
      <div className="mt-2 text-xs text-gray-600">Orders ready at Main Processing Hub</div>
      <div className="mt-3 flex flex-col gap-2">
        {orders.map((o) => (
          <label key={o.id} className="border rounded p-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Order ID: {o.id}</p>
              <p className="text-[10px] text-gray-500">Select orders to deliver</p>
            </div>
            <input type="checkbox" className="h-4 w-4" />
          </label>
        ))}
      </div>
      <Link href="/delivery/56789" className="mt-4 w-full inline-flex justify-center items-center bg-blue-600 text-white rounded-md py-2 text-sm">Confirm Selection</Link>
    </div>
  );
}