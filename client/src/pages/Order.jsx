import React from "react";
import "../css/pages/Order.css";
import OrderSectionCard from "../components/orders/OrderSectionCard";

const Order = () => {
  return (
    <div className="order-page">
      {/* Main Order Sections */}
      <div className="order-main">
        <OrderSectionCard
          title="Your Order Summary"
          description="Thank you for shopping with us! Review your order details below before proceeding to checkout."
        >
          <div className="order-inner-box bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-medium text-gray-700">Order Total</h3>
            <p className="text-2xl font-bold text-indigo-600 mt-2">$152.00</p>
          </div>
        </OrderSectionCard>

        <OrderSectionCard
          title="Shipping Information"
          description="Please confirm your delivery address and estimated shipping time."
        >
          <div className="order-inner-box bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-medium text-gray-700">Expected Delivery</h3>
            <p className="text-2xl font-bold text-indigo-600 mt-2">
              October 25, 2025
            </p>
          </div>
        </OrderSectionCard>

        <OrderSectionCard
          title="Payment Details"
          description="Review your payment method and confirm your billing information."
        >
          <div className="order-inner-box bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="font-medium text-gray-700">Payment Method</h3>
            <p className="text-2xl font-bold text-indigo-600 mt-2">
              Credit Card (Visa)
            </p>
          </div>
        </OrderSectionCard>
      </div>

      {/* Sidebar */}
    </div>
  );
};

export default Order;
