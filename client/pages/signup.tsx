import Button from "../components/Button";

export default function Home() {
	return (
		<>
			<div className="mt-10 sm:mt-0 w-full mx-auto h-fit">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">Signup</h3>
						</div>
					</div>
					<div className="mt-5 md:col-span-2 md:mt-0">
						<form action="#" method="POST">
							<div className="overflow-hidden shadow sm:rounded-md">
								<div className="bg-white px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
												First name
											</label>
											<input
												type="text"
												name="firstname"
												id="firstname"
												autoComplete="given-name"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
												Last name
											</label>
											<input
												type="text"
												name="lastname"
												id="lastname"
												autoComplete="family-name"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6">
											<label htmlFor="email" className="block text-sm font-medium text-gray-700">
												Email address
											</label>
											<input
												type="text"
												name="email"
												id="email"
												autoComplete="email"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-6 lg:col-span-3">
											<label htmlFor="password" className="block text-sm font-medium text-gray-700">
												Password
											</label>
											<input
												type="password"
												name="password"
												id="password"
												autoComplete="address-level2"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-6 lg:col-span-3">
											<label htmlFor="repeat_password" className="block text-sm font-medium text-gray-700">
												Repeat your password
											</label>
											<input
												type="password"
												name="repeat_password"
												id="repeat_password"
												autoComplete="address-level1"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									<Button text={"Save"} primary={true}/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
