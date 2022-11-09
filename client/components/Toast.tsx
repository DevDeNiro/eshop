import {toast, ToastContainer} from "react-toastify";
import {useAppContext} from "../context";
import {ToastPropsType} from "../types/types";

export default function Toast({text, id}: ToastPropsType) {
	const {queryState: {isSuccess}} = useAppContext()
	const notify = () => toast.success(text, {
		toastId: id,
		autoClose: 3000
	})
	if(!toast.isActive(id)) notify()

	return (
		<>
			{isSuccess && <ToastContainer />}
		</>
	)
}
