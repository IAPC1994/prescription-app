'use client';

import { Sidebar, TopMenu } from "@/components";
import { useUIDarkmodeStore } from "@/store";

export default function PrescriptionLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const isDarkMode = useUIDarkmodeStore(state => state.isDarkMode);
    return (
        <main className={`${(isDarkMode) ? 'dark' : 'light'}`}>
            <TopMenu />
            <Sidebar />
            <div className="px-0 min-h-screen">
                {children}
            </div>
        </main>
    );
}