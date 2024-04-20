'use client';

import Link from 'next/link'
import { useUIDarkmodeStore, useUIStore } from '@/store'
import { IoMenuOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export const TopMenu = () => {
    const openMenu = useUIStore(state => state.openSideMenu);
    const toggleTheme = useUIDarkmodeStore( state => state.toggleTheme );
    const isDarkMode = useUIDarkmodeStore( state => state.isDarkMode );

    return (
        <nav className="fixed flex px-5 justify-between items-center w-full bg-sky-500 dark:bg-sky-950 text-white z-10">
            {/* Logo */}
            <div>
                <Link href={'/'}>
                    <span className={`antialiased font-bold`}>Prescription System</span>
                </Link>
            </div>
            
            {/* Center Title */}
            <div className="hidden sm:block">
                <span className={`antialiased text-lg font-semibold`}></span>
            </div>
            
            {/* Menu */}
            <div className="flex items-center">
                <button className="m-2 p-2 rounded-md transition-all hover:bg-sky-700 border border-gray-100 dark:hover:bg-gray-700" onClick={toggleTheme}>
                    {
                        (isDarkMode)
                            ? <IoMoonOutline size={ 20 } />
                            : <IoSunnyOutline size={ 20 } />
                    }
                </button>
                <button className="m-2 p-2 rounded-md transition-all hover:bg-sky-700 border border-gray-100 dark:hover:bg-gray-700" onClick={openMenu}>
                    <IoMenuOutline size={ 20 } />
                </button>
            </div>
        </nav>
    )
}