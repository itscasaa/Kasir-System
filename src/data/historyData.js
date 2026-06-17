export const dateTabs = ["Today", "Yesterday", "Last 7 Days", "Custom"];

export const orderHistory = [
  {
    id: "#ORD-3290",
    date: "Oct 24, 2023",
    time: "14:20",
    customer: "Anna Jones",
    type: "Dine-in",
    table: "Table 12",
    amount: 241380,
    status: "Completed",
    payment: "Visa ending in •••• 4242",
    items: [
      { name: "Beras Premium Cianjur 5kg", note: "", price: 72500, costPrice: 65000 },
      { name: "Minyak Goreng Bimoli 2L", note: "", price: 36000, costPrice: 31000 },
      { name: "Indomie Goreng Spesial (Karton)", note: "", price: 115000, costPrice: 102000 }
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
    amount: 58860,
    status: "Cancelled",
    payment: "Not charged",
    items: [
      { name: "Rokok Sampoerna Mild 16", note: "", price: 32500, costPrice: 29500 },
      { name: "Kopi Kapal Api Mix (Renceng)", note: "", price: 14000, costPrice: 11500 },
      { name: "Teh Celup Sariwangi isi 25", note: "", price: 8000, costPrice: 6200 }
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
    amount: 171180,
    status: "Refunded",
    payment: "Mastercard ending in •••• 8891",
    items: [
      { name: "Beras Premium Cianjur 5kg", note: "", price: 72500, costPrice: 65000 },
      { name: "Telur Ayam Negeri 1kg", note: "", price: 28000, costPrice: 24500 },
      { name: "Minyak Goreng Bimoli 2L", note: "", price: 36000, costPrice: 31000 },
      { name: "Detergen Rinso Cair 800ml", note: "", price: 22000, costPrice: 18500 }
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
    amount: 48060,
    status: "Completed",
    payment: "Cash",
    items: [
      { name: "Telur Ayam Negeri 1kg", note: "", price: 28000, costPrice: 24500 },
      { name: "Teh Celup Sariwangi isi 25", note: "", price: 8000, costPrice: 6200 },
      { name: "Chiki Balls Keju 55g", note: "", price: 8500, costPrice: 6800 }
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
    amount: 48600,
    status: "Completed",
    payment: "Visa ending in •••• 1029",
    items: [
      { name: "Rokok Surya 16", note: "", price: 31000, costPrice: 28000 },
      { name: "Kopi Kapal Api Mix (Renceng)", note: "", price: 14000, costPrice: 11500 }
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
    amount: 32940,
    status: "Completed",
    payment: "Debit ending in •••• 7712",
    items: [
      { name: "Gula Pasir Gulaku 1kg", note: "", price: 18000, costPrice: 15500 },
      { name: "Teh Celup Sariwangi isi 25", note: "", price: 8000, costPrice: 6200 },
      { name: "Sabun Mandi Lifebuoy Merah", note: "", price: 4500, costPrice: 3500 }
    ],
    taxRate: 0.08
  }
];
