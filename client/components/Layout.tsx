import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {useAppContext} from "../context";

export default function Layout({children}: {children: React.ReactNode}) {
	const {setIsOpen} = useAppContext()
	return (
		<main onClick={() => setIsOpen(false)} className="bg-gray-100 min-h-screen flex flex-col justify-start items-center gap-14">
			<Header />
			<section className="flex-1 w-5/6">
				{children}
			</section>
			<Footer />
		</main>
	)
}
