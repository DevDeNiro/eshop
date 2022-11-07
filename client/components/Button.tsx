export default function Button({text, primary, shouldGrow, className}: {text: string, primary: boolean, shouldGrow: boolean, className?: string}) {
	return (
		<button
			type="submit"
			className={`${shouldGrow ? "w-full md:w-fit" : "w-fit"} inline-flex justify-center rounded-md border py-2 px-4 text-sm font-medium shadow-sm ${primary ? "bg-indigo-600 hover:bg-indigo-700 border-transparent text-white" : "text-indigo-600 border-indigo-600 hover:bg-gray-200"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
		>
			{text}
		</button>
	)
}
