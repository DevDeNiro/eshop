import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-white w-full p-5 h-fit shadow-lg flex justify-between items-center">
			<Link href={"/"}>
				<h1 className="font-bold text-2xl">e.<span className="text-indigo-600">Shop</span></h1>
			</Link>
			<Navbar />
		</header>
	)
}
