// src/services/api.js
export async function fetchOrders() {
  // simulate API call delay
  await new Promise((res) => setTimeout(res, 800));

  // mock data
  return [
    {
      id: "ORD-001",
      date: "2025-10-10",
      status: "Delivered",
      total: 1350,
      items: [
        { id: 1, name: "Puppuccino", qty: 2, price: 150 },
        { id: 2, name: "Dog Toy", qty: 1, price: 1050 },
      ],
    },
    {
      id: "ORD-002",
      date: "2025-10-15",
      status: "Processing",
      total: 650,
      items: [
        { id: 3, name: "Dog Shampoo", qty: 1, price: 650 },
      ],
    },
  ];
}
