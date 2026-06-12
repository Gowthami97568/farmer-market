import { create } from "zustand";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  farmerName: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.productId === item.productId
      );

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return { items: [...state.items, item] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.productId !== id),
    })),

  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.productId === id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.productId === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0),
    })),
}));