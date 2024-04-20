import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    isSideMenuOpen: boolean;

    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const useUIStore = create<State>()(
    (set, get) => ({
    
    isSideMenuOpen: false,

    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false }),
    })
 );