export const createUISlice = (set) => ({
    sidebarOpen: false,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    theme: 'dark',
    setTheme: (theme) => set({ theme }),
});
