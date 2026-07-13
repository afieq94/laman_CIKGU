import { create } from 'zustand';

const useStore = create((set) => ({
  cart: [],
  isCheckoutOpen: false,
  setCheckoutOpen: (open) => set({ isCheckoutOpen: open }),
}));

export default useStore;