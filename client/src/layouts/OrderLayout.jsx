export default function OrderLayout({ children }) {
  return (
    <div className="order-layout text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Your Orders
          </h1>
          <p className="text-gray-500">Track your recent purchases below</p>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}
