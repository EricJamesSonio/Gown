import React from "react";
import "../css/pages/Order.css";
import OrderSectionCard from "../components/orders/OrderSectionCard";

const Order = () => {
  return (
    <div className="order-page flex gap-6 p-6 relative">
      {/* Main Order Sections */}
      <div className="order-main flex-1 flex flex-wrap justify-between gap-4">
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

      {/* Fixed Sidebar */}
      <aside className="order-sidebar fixed right-6 top-24 w-72 bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="hover:text-indigo-600 cursor-pointer">Track Order</li>
          <li className="hover:text-indigo-600 cursor-pointer">Cancel Order</li>
          <li className="hover:text-indigo-600 cursor-pointer">Download Invoice</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact Support</li>
        </ul>
      </aside>
    </div>
  );
};

export default Order;
