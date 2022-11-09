import Orders from "../../components/Orders";
import PageTitle from "../../components/PageTitle";
import {useAppContext} from "../../context";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Account() {
	const {user, isAuthorized} = useAppContext()
	const router = useRouter()
	const [calledPush, setCalledPush] = useState<boolean>(false)

	useEffect(() => {
		// checks if the user is authenticated
		if(!isAuthorized) setCalledPush(true)
			calledPush && router.push("/login")

	}, [])

	return (
		<>
			<div className="mt-10 sm:mt-0 w-full mx-auto h-fit">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<PageTitle title={`${user ? user?.firstname + " " + user?.lastname : "Tony Stark"}'s Account`} />
						</div>
					</div>
					<div className="mt-5 md:col-span-2 md:mt-0">
						<h3>Your Orders History</h3>
						{user && <Orders orders={user.orders} />}
					</div>
				</div>
			</div>
		</>
	)
}

