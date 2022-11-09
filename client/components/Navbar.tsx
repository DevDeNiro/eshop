import React from "react";
import AccountMenu from "./AccountMenu";
import Link from "next/link";
import {useAppContext} from "../context";

export default function Navbar() {
	const {user} = useAppContext()
	return (
		<nav className="flex items-center gap-5">
			{!user ? (
				<>
					<Link href={"/signup"} className="transition py-2 px-4 rounded hover:bg-indigo-200">
						Signup
					</Link>
					<Link href={"/login"} className="transition py-2 px-4 rounded hover:bg-indigo-200">
						Login
					</Link>
				</>
			): (
				<>
					<Link href={"/catalogue"} className="transition py-2 px-4 rounded hover:bg-indigo-200">
						Catalogue
					</Link>
					<AccountMenu letter={user.firstname[0]} />
				</>
			)}

		</nav>
	)
}

