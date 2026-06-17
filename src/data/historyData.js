export const dateTabs = ["Today", "Yesterday", "Last 7 Days", "Custom"];

export const orderHistory = [
  {
    id: "#ORD-3290",
    date: "Oct 24, 2023",
    time: "14:20",
    customer: "Anna Jones",
    type: "Dine-in",
    table: "Table 12",
    amount: 248400,
    status: "Completed",
    payment: "Visa ending in \u2022\u2022\u2022\u2022 4242",
    items: [
      { name: "Truffle Mushroom Risotto", note: "Extra Parmesan", price: 120000, costPrice: 80000 },
      { name: "Grilled Salmon Bowl", note: "Quinoa base", price: 85000, costPrice: 55000 },
      { name: "Iced Matcha Latte", note: "", price: 25000, costPrice: 15000 }
    ],
    taxRate: 0.08
  },
  {
    id: "#ORD-3289",
    date: "Oct 24, 2023",
    time: "13:45",
    customer: "Marcus Chen",
    type: "Takeaway",
    table: "",
    amount: 64800,
    status: "Cancelled",
    payment: "Not charged",
    items: [
      { name: "Chicken Katsu Bento", note: "No mayo", price: 30000, costPrice: 20000 },
      { name: "Iced Lemon Tea", note: "", price: 15000, costPrice: 8000 },
      { name: "French Fries", note: "", price: 15000, costPrice: 8000 }
    ],
    taxRate: 0.08
  },
  {
    id: "#ORD-3288",
    date: "Oct 24, 2023",
    time: "12:10",
    customer: "Sarah Miller",
    type: "Delivery",
    table: "",
    amount: 178200,
    status: "Refunded",
    payment: "Mastercard ending in \u2022\u2022\u2022\u2022 8891",
    items: [
      { name: "Large Italian Pizza", note: "Extra cheese", price: 80000, costPrice: 50000 },
      { name: "Noodles with Scallops", note: "", price: 35000, costPrice: 22000 },
      { name: "Healthy Vegie Salad", note: "No onion", price: 20000, costPrice: 13000 },
      { name: "Waffle with Blueberries", note: "", price: 30000, costPrice: 20000 }
    ],
    taxRate: 0.08
  },
  {
    id: "#ORD-3287",
    date: "Oct 24, 2023",
    time: "11:30",
    customer: "David Wilson",
    type: "Dine-in",
    table: "Table 7",
    amount: 59400,
    status: "Completed",
    payment: "Cash",
    items: [
      { name: "Egg Fried Rice", note: "Spicy", price: 30000, costPrice: 19000 },
      { name: "Hot Tea", note: "", price: 10000, costPrice: 4000 },
      { name: "Spring Roll", note: "", price: 15000, costPrice: 9000 }
    ],
    taxRate: 0.08
  },
  {
    id: "#ORD-3286",
    date: "Oct 24, 2023",
    time: "11:05",
    customer: "Guest #42",
    type: "Dine-in",
    table: "Table 3",
    amount: 35640,
    status: "Completed",
    payment: "Visa ending in \u2022\u2022\u2022\u2022 1029",
    items: [
      { name: "Egg Soup with Noodles Inside", note: "", price: 25000, costPrice: 16000 },
      { name: "Mineral Water", note: "", price: 8000, costPrice: 3000 }
    ],
    taxRate: 0.08
  },
  {
    id: "#ORD-3285",
    date: "Oct 24, 2023",
    time: "09:40",
    customer: "Elena Rodriguez",
    type: "Takeaway",
    table: "",
    amount: 86400,
    status: "Completed",
    payment: "Debit ending in \u2022\u2022\u2022\u2022 7712",
    items: [
      { name: "Baked Pancake with Honey Sauce", note: "", price: 20000, costPrice: 14000 },
      { name: "Japanese Homemade Original Ramen", note: "Extra egg", price: 35000, costPrice: 23000 },
      { name: "Iced Matcha Latte", note: "", price: 25000, costPrice: 15000 }
    ],
    taxRate: 0.08
  }
];
