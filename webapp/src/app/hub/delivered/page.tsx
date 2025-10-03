export default function DeliveredToHub() {
  const delivered = [
    { id: "#12345", customer: "Alice Johnson", when: "Delivered Sep 15, 1:35 PM" },
    { id: "#12346", customer: "Bob Smith", when: "Delivered Sep 15, 2:20 PM" },
    { id: "#12347", customer: "Charlie Davis", when: "Delivered Sep 15, 4:10 PM" },
  ];
  return (
    <div className="p-4">
      <h2 className="font-semibold">Delivered to Hub</h2>
      <div className="mt-3 flex flex-col gap-2">
        {delivered.map((d) => (
          <div key={d.id} className="border rounded p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{d.id}</p>
                <p className="text-xs text-gray-500">{d.customer}</p>
              </div>
              <span className="text-[10px] text-green-600">Delivered</span>
            </div>
            <p className="text-[10px] mt-1">{d.when}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">No delivered-to-hub orders yet.</div>
    </div>
  );
}