import React, {useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {useAppContext} from "../context";
import {LayoutPropsType} from "../types/types";

export default function Layout({children}: LayoutPropsType) {
	const {setIsOpen, reset} = useAppContext()
	useEffect(() => {
		reset()
	}, [children])
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
