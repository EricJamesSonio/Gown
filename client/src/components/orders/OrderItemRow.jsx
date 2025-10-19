export default function OrderItemRow({ item }) {
  return (
    <div className="flex justify-between items-center text-gray-700 text-sm">
      <span>
        {item.name} × {item.qty}
      </span>
      <span className="font-medium">₱{item.price * item.qty}</span>
    </div>
  );
}
