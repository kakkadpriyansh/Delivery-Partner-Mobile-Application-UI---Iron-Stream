export default function DeliveryHistory() {
  const history = [
    { id: "465432", customer: "John Doe", when: "Delivered on 15 Sep, 1:35 PM" },
    { id: "465433", customer: "Jane Smith", when: "Delivered on 15 Sep, 2:10 PM" },
    { id: "465434", customer: "Mark Wilson", when: "Delivered on 15 Sep, 3:42 PM" },
  ];
  return (
    <div className="p-4">
      <h2 className="font-semibold">Delivery History</h2>
      <div className="mt-3 flex flex-col gap-2">
        {history.map((h) => (
          <div key={h.id} className="border rounded p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Order #{h.id}</p>
                <p className="text-xs text-gray-500">{h.customer}</p>
              </div>
              <span className="text-[10px] text-green-600">Delivered</span>
            </div>
            <p className="text-[10px] mt-1">{h.when}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">No delivery history yet.</div>
    </div>
  );
}