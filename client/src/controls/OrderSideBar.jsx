import React from "react";
import "../css/controls/OrderSidebar.css";

export default function OrderSidebar() {
  return (
    <aside className="order-sidebar">
      <h2>Quick Actions</h2>
      <ul>
        <li>Track Order</li>
        <li>Cancel Order</li>
        <li>Download Invoice</li>
        <li>Contact Support</li>
      </ul>
    </aside>
  );
}
