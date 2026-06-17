export const orderQueue = [
  { id: 1, customer: "Anna Jones", orderId: "#ORD-3321", status: "Ready" },
  { id: 2, customer: "Jonas Kahndwald", orderId: "#ORD-3123", status: "In Kitchen" },
  { id: 3, customer: "Martha Nielsen", orderId: "#ORD-3214", status: "In Kitchen" },
  { id: 4, customer: "Jon Snow", orderId: "#ORD-3291", status: "Pending" },
];

export const categories = [
  { name: "Sembako", items: 85, icon: "shopping_basket" },
  { name: "Mie Instan", items: 40, icon: "ramen_dining" },
  { name: "Kopi & Teh", items: 30, icon: "local_cafe" },
  { name: "Rokok", items: 25, icon: "smoking_rooms" },
  { name: "Jajanan", items: 50, icon: "cookie" },
  { name: "Kebutuhan Rumah", items: 60, icon: "soap" },
];

export const mostOrdered = [
  {
    id: 1,
    name: "Beras Premium Cianjur 5kg",
    price: 72500,
    costPrice: 65000,
    category: "Sembako",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Minyak Goreng Bimoli 2L",
    price: 36000,
    costPrice: 31000,
    category: "Sembako",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Indomie Goreng Spesial (Karton)",
    price: 115000,
    costPrice: 102000,
    category: "Mie Instan",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=160&fit=crop&q=80",
  },
];

export const popularDishes = [
  {
    id: 4,
    name: "Telur Ayam Negeri 1kg",
    price: 28000,
    costPrice: 24500,
    category: "Sembako",
    image: "https://images.unsplash.com/photo-1516448424440-9dbca97779c1?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Kopi Kapal Api Mix (Renceng)",
    price: 14000,
    costPrice: 11500,
    category: "Kopi & Teh",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Rokok Sampoerna Mild 16",
    price: 32500,
    costPrice: 29500,
    category: "Rokok",
    image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Gula Pasir Gulaku 1kg",
    price: 18000,
    costPrice: 15500,
    category: "Sembako",
    image: "https://images.unsplash.com/photo-1581781862590-f2c974c8b9d9?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Teh Celup Sariwangi isi 25",
    price: 8000,
    costPrice: 6200,
    category: "Kopi & Teh",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Rokok Surya 16",
    price: 31000,
    costPrice: 28000,
    category: "Rokok",
    image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Chiki Balls Keju 55g",
    price: 8500,
    costPrice: 6800,
    category: "Jajanan",
    image: "https://images.unsplash.com/photo-1599490659283-44626a75170a?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Sabun Mandi Lifebuoy Merah",
    price: 4500,
    costPrice: 3500,
    category: "Kebutuhan Rumah",
    image: "https://images.unsplash.com/photo-1607006342445-be05f180f316?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Detergen Rinso Cair 800ml",
    price: 22000,
    costPrice: 18500,
    category: "Kebutuhan Rumah",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=160&fit=crop&q=80",
  },
];

export const allDishes = [...mostOrdered, ...popularDishes];
