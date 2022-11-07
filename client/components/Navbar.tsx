import Link from "next/link";
import React from "react";
import {useAppContext} from "../context";

export default function Navbar() {
	const {setIsOpen, isOpen} = useAppContext()

	const toggleMenu = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		setIsOpen((curr: boolean) => !curr)
	}
	return (
		<nav className="flex items-center gap-5">
			{/*<Link href={"/signup"} className="transition py-2 px-4 rounded hover:bg-indigo-200">
				Signup
			</Link>
			<Link href={"/login"} className="transition py-2 px-4 rounded hover:bg-indigo-200">
				Login
			</Link>*/}

			<div className="relative inline-block text-left">
				<div onClick={toggleMenu} onBlur={() => setIsOpen(false)} className="cursor-pointer">
					<p className="w-[40px] h-[40px] bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">A</p>
				</div>
				<div
					className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isOpen ? "animate-appear": "animate-disappear pointer-events-none"}`}
					role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
					<div className="py-1" role="none">
						<Link href={"/account"} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabIndex={-1}
						   >Account</Link>
						<Link href={"/account/settings"} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabIndex={-1}
						   >Settings</Link>
						<form method="POST" action="#" role="none">
							<button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-indigo-600 hover:text-white"
									role="menuitem" tabIndex={-1} id="menu-item-3">Sign out
							</button>
						</form>
					</div>
				</div>
			</div>
		</nav>
	)
}
