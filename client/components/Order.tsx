import {FaChevronDown} from "react-icons/all";

export default function Order() {
	return (
		<article className="min-w-[320px] mt-5 flex flex-col gap-6 bg-white shadow rounded p-4">
			<div className="flex flex-1 justify-between start flex-wrap">
				<div>
					<h4 className="font-bold">N°{"636937d49d41ed3046dbba31"}</h4>
					<p className="text-xs">{new Date().toLocaleDateString()}</p>
				</div>
				<p>12.60€</p>
			</div>
			<div className="flex items-center gap-1 text-xs cursor-pointer">
				<FaChevronDown size={14} />
				More Details
			</div>
		</article>
	)
}
