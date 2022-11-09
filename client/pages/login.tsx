import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import {useAppContext} from "../context";
import {FormEvent, MutableRefObject, useEffect, useRef} from "react";
import {useRouter} from "next/navigation";
import {useForm} from "../services/hooks.service";
import {BallTriangle} from "react-loader-spinner";

export default function Login() {
	const {login, queryState: {isSuccess, isQuerying, isError}} = useAppContext()
	const formRef = useRef() as MutableRefObject<HTMLFormElement>
	const router = useRouter()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formValues = useForm(formRef)
		// console.log(formValues);
		login(formValues)
	}
	useEffect(() => {
		if(isSuccess) {
			formRef.current.reset()
			router.push("/account")
		}
	}, [isSuccess])
	return (
		<>
			<div className="mt-10 sm:mt-0 w-full mx-auto h-fit">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0 relative">
							<PageTitle title={"Login"} />
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
						<form action="#" method="POST" ref={formRef} onSubmit={handleSubmit}>
							<div className="overflow-hidden shadow sm:rounded-md">
								<div className="bg-white px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6">
											<label htmlFor="email" className="block text-sm font-medium text-gray-700">
												Email address
											</label>
											<input
												type="email"
												name="email"
												id="email"
												autoComplete="email"
												className="mt-1 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6">
											<label htmlFor="password" className="block text-sm font-medium text-gray-700">
												Password
											</label>
											<input
												type="password"
												name="password"
												id="password"
												autoComplete="password"
												className="mt-1 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>
									</div>
									{isError && <p className="mt-3 text-red-600 font-bold">{isError.error}</p>}
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									<Button primary={true} shouldGrow={true}>
										Login
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
