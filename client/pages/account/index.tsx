import Orders from "../../components/Orders";
import PageTitle from "../../components/PageTitle";
export default function Account() {
	return (
		<>
			<div className="mt-10 sm:mt-0 w-full mx-auto h-fit">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<PageTitle title={"Tony Stark's Account"} />
						</div>
					</div>
					<div className="mt-5 md:col-span-2 md:mt-0">
						<h3>Your Orders History</h3>
						<Orders />
					</div>
				</div>
			</div>
		</>
	)
}
