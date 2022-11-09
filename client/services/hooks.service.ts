import {MutableRefObject} from "react";

export const useForm = (formRef: MutableRefObject<HTMLFormElement>) => {
	const data = new FormData(formRef.current)
	return Object.fromEntries(data)
}
