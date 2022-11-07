export default function Button({text, primary}: {text: string, primary: boolean}) {
	return (
		<button
			type="submit"
			className={`w-full md:w-fit inline-flex justify-center rounded-md border py-2 px-4 text-sm font-medium shadow-sm ${primary ? "bg-indigo-600 hover:bg-indigo-700 border-transparent text-white" : "text-indigo-600 border-indigo-600 hover:bg-gray-200"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
		>
			{text}
		</button>
	)
}
