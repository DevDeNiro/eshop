import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import {FormEvent, MutableRefObject, useEffect, useRef} from "react";
import {useAppContext} from "../context";
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from "../services/hooks.service";
import {BallTriangle} from "react-loader-spinner";
import Toast from "../components/Toast";
import {useRouter} from "next/navigation";

export default function Signup() {
	const {register, queryState: {isSuccess, isQuerying, isError}} = useAppContext()
	const formRef = useRef() as MutableRefObject<HTMLFormElement>
	const router = useRouter()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formValues = useForm(formRef)
		register(formValues)
	}
	useEffect(() => {
		let timeToRedirect: NodeJS.Timeout
		if(isSuccess) {
			formRef.current.reset()
			timeToRedirect = setTimeout(() => {
				router.push("/login")
			}, 3000)
		}
		return () => clearTimeout(timeToRedirect)
	}, [isSuccess])

	return (
		<>
			<Toast text={"You're signed up ! You will be redirected"}  id={"success"}/>
			<div className="mt-10 sm:mt-0 w-full mx-auto h-fit">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<PageTitle title={"Signup"} />
							{isQuerying && <BallTriangle
								height={100}
								width={100}
								radius={5}
								color="#4fa94d"
								wrapperClass={"mt-5 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 md:relative"}
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
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
												First name
											</label>
											<input
												type="text"
												name="firstname"
												id="firstname"
												autoComplete="given-name"
												className="mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
												className="mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6">
											<label htmlFor="email" className="block text-sm font-medium text-gray-700">
												Email address
											</label>
											<input
												type="email"
												name="email"
												id="email"
												autoComplete="email"
												className={`mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 sm:text-sm ${isError && isError.fields.includes("email") ? "border-red-600" : "border-gray-300"}`}
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
												className={`mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 sm:text-sm ${isError && isError.fields.includes("password") ? "border-red-600" : "border-gray-300"}`}
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
												className={`mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 border-2 focus:ring-indigo-500 sm:text-sm ${isError && isError.fields.includes("repeat_password") ? "border-red-600" : "border-gray-300"}`}
											/>
										</div>
									</div>
									{isError && <p className="mt-3 text-red-600 font-bold">{isError.error}</p>}
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									<Button primary={true} shouldGrow={true}>
										Save
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
