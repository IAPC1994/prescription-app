import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export const useUIDarkmodeStore = create<State>()(
    persist(
        (set, get) => ({
        isDarkMode: false,
        toggleTheme: () => set({ isDarkMode: !get().isDarkMode }),
    }),{
        name: 'dark-mode'
    })
 );