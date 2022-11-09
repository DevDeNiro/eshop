import PageTitle from "../components/PageTitle";
import {useAppContext} from "../context";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {BallTriangle} from "react-loader-spinner";

export default function Catalogue() {
	const {isAuthorized, getProducts, products: {products}, queryState: {isQuerying}} = useAppContext()
	const router = useRouter()
	const [calledPush, setCalledPush] = useState<boolean>(false)

	useEffect(() => {
		// checks if the user is authenticated
		if(!isAuthorized) setCalledPush(true)
		calledPush && router.push("/login")
	}, [])

	useEffect(() => {
		getProducts()
		console.log(products);
	}, [])

	return (
	<div className="mt-10 sm:mt-0 w-full mx-auto h-fit">
			<div className="md:grid md:grid-cols-3 md:gap-6">
				<div className="md:col-span-1">
					<div className="px-4 sm:px-0">
						<PageTitle title={"Catalogue"} />
						{isQuerying && <BallTriangle
							height={100}
							width={100}
							radius={5}
							color="#4E45E3"
							wrapperClass={"md:mt-5 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 md:relative md-transform-none"}
							ariaLabel="ball-triangle-loading"
							visible={true}
						/>}
					</div>
				</div>
				<div className="mt-5 md:col-span-2 md:mt-0">
					<div className="mt-5 md:col-span-2 md:mt-0">
						<div className="overflow-hidden shadow sm:rounded-md">
							<div className="bg-white px-4 py-5 sm:p-6">
								<div className="grid grid-cols-6 gap-6">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
