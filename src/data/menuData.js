export const orderQueue = [
  { id: 1, customer: "Anna Jones", orderId: "#ORD-3321", status: "Ready" },
  { id: 2, customer: "Jonas Kahndwald", orderId: "#ORD-3123", status: "In Kitchen" },
  { id: 3, customer: "Martha Nielsen", orderId: "#ORD-3214", status: "In Kitchen" },
  { id: 4, customer: "Jon Snow", orderId: "#ORD-3291", status: "Pending" },
];

export const categories = [
  { name: "Breakfast", items: 72, icon: "breakfast_dining" },
  { name: "Beverages", items: 35, icon: "local_cafe" },
  { name: "Pasta", items: 24, icon: "ramen_dining" },
  { name: "Sushi", items: 20, icon: "set_meal" },
  { name: "Side Dish", items: 24, icon: "tapas" },
  { name: "Rice Bowl", items: 32, icon: "rice_bowl" },
];

export const mostOrdered = [
  {
    id: 1,
    name: "Vietnamese Homemade Salad",
    price: 25000,
    costPrice: 17000,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Baked Pancake with Honey Sauce",
    price: 20000,
    costPrice: 14000,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Japanese Homemade Original Ramen",
    price: 35000,
    costPrice: 23000,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=160&fit=crop&q=80",
  },
];

export const popularDishes = [
  {
    id: 4,
    name: "Egg Fried Rice Original Made by Asian",
    price: 30000,
    costPrice: 19000,
    category: "Rice Bowl",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 5,
    name: "2x Cheese Burger with Fries",
    price: 45000,
    costPrice: 28000,
    category: "Side Dish",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Egg Soup with Noodles Inside",
    price: 25000,
    costPrice: 16000,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Indomie Soto with Shrimp and Egg",
    price: 15000,
    costPrice: 10000,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Noodles with Scallops",
    price: 35000,
    costPrice: 22000,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Healthy Vegie Salad",
    price: 20000,
    costPrice: 13000,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Bread Toast with Egg",
    price: 18000,
    costPrice: 11000,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Large Italian Pizza",
    price: 80000,
    costPrice: 50000,
    category: "Side Dish",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=160&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Waffle with Blueberries",
    price: 30000,
    costPrice: 20000,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=200&h=160&fit=crop&q=80",
  },
];

export const allDishes = [...mostOrdered, ...popularDishes];
