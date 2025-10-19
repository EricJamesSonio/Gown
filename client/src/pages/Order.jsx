import { useEffect, useState } from "react";
import { fetchOrders } from "../services/api";
import OrderList from "../components/orders/OrderList";
import OrderDetailModal from "../components/orders/OrderDetailModal";
import LoadingSpinner from "../components/orders/ui/LoadingSpinner";
import EmptyState from "../components/orders/ui/EmptyState";
import OrderLayout from "../layouts/OrderLayout";
import "../css/pages/Order.css";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders().then((data) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <OrderLayout>
        <LoadingSpinner />
      </OrderLayout>
    );

  if (orders.length === 0)
    return (
      <OrderLayout>
        <EmptyState message="No orders found yet." />
      </OrderLayout>
    );

  return (
    <OrderLayout>
      <OrderList orders={orders} onSelectOrder={setSelectedOrder} />
      {selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </OrderLayout>
  );
}
