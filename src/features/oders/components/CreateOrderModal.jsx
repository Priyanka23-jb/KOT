import { useState } from "react";

export default function CreateOrderModal({ onClose }) {
  const [items, setItems] = useState([
    { item: "", price: 0, qty: 1 },
  ]);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* ===== BACKDROP ===== */}
      <div
        className="flex-1 bg-black/40"
        onClick={onClose}
      />

      {/* ===== RIGHT DRAWER ===== */}
      <div className="w-full max-w-md bg-[#FFF7F2] shadow-2xl h-full flex flex-col animate-slide-in-right">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-orange-200">
          <h2 className="text-lg font-semibold text-orange-700">
            Create Order
          </h2>
          <button
            onClick={onClose}
            className="text-orange-600 hover:text-orange-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">

          {/* ORDER INFO */}
          <div className="space-y-3">
            <select className="w-full border border-orange-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option>Select Table</option>
            </select>

            <select className="w-full border border-orange-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option>Select Waiter</option>
            </select>

            <select className="w-full border border-orange-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option>Select Cashier</option>
            </select>
          </div>

          {/* ITEMS */}
          <div>
            <h3 className="text-sm font-medium text-orange-700 mb-2">
              Items
            </h3>

            <div className="space-y-3">
              {items.map((row, idx) => (
                <div key={idx} className="flex gap-2">
                  <select className="flex-1 border border-orange-200 rounded-lg px-3 py-2">
                    <option>Select Item</option>
                  </select>

                  <input
                    type="number"
                    min="1"
                    value={row.qty}
                    className="w-20 border border-orange-200 rounded-lg px-3 py-2"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setItems([...items, { item: "", price: 0, qty: 1 }])
              }
              className="mt-3 text-sm text-orange-600 hover:underline"
            >
              + Add Item
            </button>
          </div>

          {/* TOTAL */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-orange-800 font-semibold">
            Total Amount: ₹ {total}
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t border-orange-200">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold">
            Save Order
          </button>
        </div>
      </div>
    </div>
  );
}
