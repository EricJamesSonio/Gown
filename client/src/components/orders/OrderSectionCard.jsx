// src/components/orders/OrderSectionCard.jsx
import React from "react";

export default function OrderSectionCard({ title, description, children }) {
  return (
    <div className="order-card flex-1 min-w-[30%] bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
}
