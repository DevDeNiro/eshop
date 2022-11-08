import React, {createContext, useContext, useMemo, useState} from "react";
import {registerService} from "../services/auth.services";

interface AppContextInterface {
	isOpen: boolean|null,
	setIsOpen: Function,
	register: Function,
	queryState: {
		isQuerying: boolean,
		isSuccess: boolean,
		isLoading: boolean,
		isError: any
	}
}

const AppContext = createContext<AppContextInterface|null>(null)

const AppProvider = ({children}: {children: React.ReactNode}) => {
	const [isOpen, setIsOpen] = useState<boolean|null>(null)
	const [queryState, setQueryState] = useState({
		isQuerying: false,
		isSuccess: false,
		isLoading: false,
		isError: null
	})

	const register = (data: any) => {
		const controller = new AbortController()
		setQueryState(({
			isQuerying: false,
			isSuccess: false,
			isLoading: false,
			isError: null
		}))
		registerService(data, controller.signal)
			.then(res => res.type === "success" ? setQueryState(curr => ({...curr, isSuccess: true, isError: null})) : setQueryState(curr => ({...curr, isSuccess: false, isError: res.data})))
			.finally(() => setQueryState(curr => ({...curr,
				isQuerying: false,
				isLoading: false
			})))

		return () => controller.abort()
	}

	const value = useMemo(() => {
		return {
			isOpen,
			setIsOpen,
			register,
			queryState
		}
	}, [isOpen, setIsOpen, register, queryState])
	return <AppContext.Provider value={value}>
		{children}
	</AppContext.Provider>
}

export const useAppContext = () => {
	return useContext(AppContext) as AppContextInterface
}

export default AppProvider
