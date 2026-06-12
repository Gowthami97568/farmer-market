import { create } from "zustand";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  farmerName: string;
}

interface Order {
  id: number;
  items: CartItem[];
}

interface OrderStore {
  orders: Order[];
  placeOrder: (items: CartItem[]) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  // ✅ load from localStorage
  orders: JSON.parse(localStorage.getItem("orders") || "[]"),

  placeOrder: (items) =>
    set((state) => {
      const newOrders = [
        ...state.orders,
        {
          id: Date.now(),
          items,
        },
      ];

      // ✅ save
      localStorage.setItem("orders", JSON.stringify(newOrders));

      return { orders: newOrders };
    }),
}));