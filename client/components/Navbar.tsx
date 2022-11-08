import React from "react";
import AccountMenu from "./AccountMenu";
import Link from "next/link";

export default function Navbar() {

	return (
		<nav className="flex items-center gap-5">
			<Link href={"/signup"} className="transition py-2 px-4 rounded hover:bg-indigo-200">
				Signup
			</Link>
			<Link href={"/login"} className="transition py-2 px-4 rounded hover:bg-indigo-200">
				Login
			</Link>
			{/*<AccountMenu />*/}
		</nav>
	)
}

