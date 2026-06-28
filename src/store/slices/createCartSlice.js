export const createCartSlice = (set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (itemId) => set((state) => ({ cart: state.cart.filter(i => i.id !== itemId) })),
    clearCart: () => set({ cart: [] }),
});
