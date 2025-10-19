import OrderItemRow from "./OrderItemRow";

export default function OrderDetailModal({ order, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Order #{order.id} Details
        </h2>
        <p className="text-sm text-gray-500 mb-4">{order.date}</p>

        <div className="space-y-2 border-t pt-3">
          {order.items.map((item) => (
            <OrderItemRow key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-4 border-t pt-3 flex justify-between text-lg font-semibold text-gray-800">
          <span>Total</span>
          <span>₱{order.total}</span>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg 
                     hover:bg-blue-700 active:scale-95 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
}
