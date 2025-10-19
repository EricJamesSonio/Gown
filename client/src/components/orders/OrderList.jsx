import OrderCard from "./OrderCard";

export default function OrderList({ orders, onSelectOrder }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onClick={() => onSelectOrder(order)}
        />
      ))}
    </div>
  );
}
