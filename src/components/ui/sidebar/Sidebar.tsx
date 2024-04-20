'use client';

import Link from "next/link";
import clsx from "clsx";
import { IoCloseOutline, IoLogOutOutline, IoNewspaperOutline } from "react-icons/io5";
import { useUIStore } from "@/store";

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

    return (
        <div>
            {/* Background black */}
            {
                isSideMenuOpen && <div className="fixed top-0 left-0 w-screen h-screen z-20 bg-black opacity-30" />
            }

            {/* Blur */}
            {
                isSideMenuOpen && <div onClick={closeMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-20 backdrop-filter backdrop-blur-sm" />
            }

            {/* Side Menu */}
            <nav
                className={
                    clsx(
                        "fixed p-5 right-0 top-0 w-[300px] h-screen bg-sky-500 dark:bg-sky-950 z-20 shadow-2xl transform transition-all duration-300 text-white",
                        {
                            "translate-x-full": !isSideMenuOpen
                        }
                    )
                }
            >
                <IoCloseOutline
                    size={30}
                    className="absolute top-5 right-5 cursor-pointer hover:scale-125 transition-all"
                    onClick={closeMenu}
                />

                {/* Menu */}
                <Link
                    href='/'
                    onClick={closeMenu}
                    className="flex items-center mt-10 p-2 hover:bg-sky-700 rounded transition-all dark:hover:bg-gray-700"
                >
                    <IoNewspaperOutline size={ 20 } />
                    <span className="ml-3 text-xl">Agenda</span>
                </Link>

                <Link
                    href='/auth/login'
                    onClick={closeMenu}
                    className="flex items-center mt-10 p-2 hover:bg-sky-700 rounded transition-all dark:hover:bg-gray-700"
                >
                    <IoLogOutOutline size={ 20 }/>
                    <span className="ml-3 text-xl">Logout</span>
                </Link>

                {/* Line separator */}
                {/* <div className="w-full h-px bg-gray-200 my-10"></div> */}
            </nav>
        </div>
    )
}
