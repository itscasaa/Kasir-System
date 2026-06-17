export const dateTabs = ["Today", "Yesterday", "Last 7 Days", "Custom"];

export const orderHistory = [
  {
    id: "#ORD-3290",
    date: "Oct 24, 2023",
    time: "14:20",
    customer: "Anna Jones",
    type: "Dine-in",
    table: "Table 12",
    amount: 45.50,
    status: "Completed",
    payment: "Visa ending in \u2022\u2022\u2022\u2022 4242",
    items: [
      { name: "Truffle Mushroom Risotto", note: "Extra Parmesan", price: 24.00 },
      { name: "Grilled Salmon Bowl", note: "Quinoa base", price: 16.50 },
      { name: "Iced Matcha Latte", note: "", price: 5.00 }
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
    amount: 28.25,
    status: "Cancelled",
    payment: "Not charged",
    items: [
      { name: "Chicken Katsu Bento", note: "No mayo", price: 18.25 },
      { name: "Iced Lemon Tea", note: "", price: 5.00 },
      { name: "French Fries", note: "", price: 5.00 }
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
    amount: 62.10,
    status: "Refunded",
    payment: "Mastercard ending in \u2022\u2022\u2022\u2022 8891",
    items: [
      { name: "Large Italian Pizza", note: "Extra cheese", price: 22.00 },
      { name: "Noodles with Scallops", note: "", price: 18.10 },
      { name: "Healthy Vegie Salad", note: "No onion", price: 12.00 },
      { name: "Waffle with Blueberries", note: "", price: 10.00 }
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
    amount: 19.50,
    status: "Completed",
    payment: "Cash",
    items: [
      { name: "Egg Fried Rice", note: "Spicy", price: 12.00 },
      { name: "Hot Tea", note: "", price: 3.50 },
      { name: "Spring Roll", note: "", price: 4.00 }
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
    amount: 14.00,
    status: "Completed",
    payment: "Visa ending in \u2022\u2022\u2022\u2022 1029",
    items: [
      { name: "Egg Soup with Noodles Inside", note: "", price: 9.00 },
      { name: "Mineral Water", note: "", price: 5.00 }
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
    amount: 33.75,
    status: "Completed",
    payment: "Debit ending in \u2022\u2022\u2022\u2022 7712",
    items: [
      { name: "Baked Pancake with Honey Sauce", note: "", price: 9.75 },
      { name: "Japanese Homemade Original Ramen", note: "Extra egg", price: 18.00 },
      { name: "Iced Matcha Latte", note: "", price: 6.00 }
    ],
    taxRate: 0.08
  }
];
