export const createAuthSlice = (set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) => set({ user, isAuthenticated: !!user }),
    logout: () => {
        localStorage.removeItem('token');
        set({ user: null, isAuthenticated: false });
    },
});
