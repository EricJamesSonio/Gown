export default function OrderCard({ order, onClick }) {
  const statusColor =
    order.status === "Delivered"
      ? "bg-green-100 text-green-700"
      : order.status === "Processing"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-gray-100 text-gray-700";

  return (
    <div
      onClick={onClick}
      className="group border border-gray-200 bg-white p-5 rounded-2xl shadow-sm
                 cursor-pointer hover:shadow-md hover:-translate-y-1
                 transition-all duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            Order #{order.id}
          </p>
          <p className="text-sm text-gray-500">{order.date}</p>
        </div>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${statusColor}`}
        >
          {order.status}
        </span>
      </div>

      <div className="mt-3 text-gray-700">
        <p className="font-medium">Total: ₱{order.total}</p>
        <p className="text-sm text-gray-500">
          {order.items.length} item{order.items.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
