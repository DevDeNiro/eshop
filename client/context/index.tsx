import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {loginService, logoutService, registerService} from "../services/auth.services";
import {getUserService} from "../services/user.service";
import {getProductsService} from "../services/products.service";

interface AppContextInterface {
	isOpen: boolean|null,
	setIsOpen: Function,
	register: Function,
	login: Function,
	queryState: {
		isQuerying: boolean,
		isSuccess: boolean,
		isError: any|null
	},
	reset: Function,
	getUser: Function,
	user: any,
	isAuthorized: boolean,
	logout: Function,
	getProducts: Function,
	products: any
}

const AppContext = createContext<AppContextInterface|null>(null)

const AppProvider = ({children}: {children: React.ReactNode}) => {
	const controller = new AbortController()
	let refreshToken = ""
	/******************** STATES ********************/
	const [isOpen, setIsOpen] = useState<boolean|null>(null)
	const [queryState, setQueryState] = useState({
		isQuerying: false,
		isSuccess: false,
		isError: null
	})
	const [user, setUser] = useState(null)
	const [products, setProducts] = useState(null)
	const [accessToken, setAccessToken] = useState<string>("")
	const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

	/******************** EFFECTS ********************/
	useEffect(() => {
		refreshToken = localStorage.getItem("refreshToken") || ""
		if(refreshToken) {
			getUser()
		}
	}, [])

	useEffect(() => {
		setIsAuthorized(!!accessToken)
	}, [accessToken])

	/******************** FUNCTIONS ********************/
	const reset = () => setQueryState(({
		isQuerying: false,
		isSuccess: false,
		isError: null
	}))

	const getProducts = () => {
		reset()
		setQueryState(curr => ({...curr,
			isQuerying: true
		}))
		getProductsService()
			.then(setProducts)
			.catch((err) => console.log(err))
			.finally(() => setQueryState(curr => ({...curr,
				isQuerying: false,
			})))
	}

	const getUser = () => {
		reset()
		setQueryState(curr => ({...curr,
			isQuerying: true
		}))
		getUserService({
			accessToken,
			refreshToken
		}, controller.signal)
			.then(res => {
				if(res.type === "success") {
					setQueryState(curr => ({...curr, isSuccess: true, isError: null}))
					setUser(res.data.user)
					if(res.data.tokens) {
						setAccessToken(res.data.tokens.accessToken)
						localStorage.setItem("refreshToken", res.data.tokens.refreshToken)
					}
				} else
					setQueryState(curr => ({...curr, isSuccess: false, isError: res.data}))
			})
			.finally(() => setQueryState(curr => ({...curr,
				isQuerying: false,
			})))

		return () => controller.abort()
	}

	const register = (data: any) => {
		reset()
		setQueryState(curr => ({...curr,
			isQuerying: true
		}))
		registerService(data, controller.signal)
			.then(res => res.type === "success" ? setQueryState(curr => ({...curr, isSuccess: true, isError: null})) : setQueryState(curr => ({...curr, isSuccess: false, isError: res.data})))
			.finally(() => setQueryState(curr => ({...curr,
				isQuerying: false,
			})))

		return () => controller.abort()
	}

	const login = (data: any) => {
		reset()
		setQueryState(curr => ({...curr,
			isQuerying: true
		}))
		loginService(data, controller.signal)
			.then(res => {
				if(res.type === "success") {
					setQueryState(curr => ({...curr, isSuccess: true, isError: null}))
					setAccessToken(res.data.tokens.accessToken)
					setUser(res.data.user)
					localStorage.setItem("refreshToken", res.data.tokens.refreshToken)
				} else
					setQueryState(curr => ({...curr, isSuccess: false, isError: res.data}))
			})
			.finally(() => setQueryState(curr => ({...curr,
				isQuerying: false,
			})))

		return () => controller.abort()
	}

	const logout = () => {
		reset()
		setQueryState(curr => ({...curr,
			isQuerying: true
		}))
		logoutService(controller.signal)
			.then(() => {
				setQueryState(curr => ({...curr, isSuccess: true, isError: null}))
				setAccessToken("")
				setUser(null)
				localStorage.removeItem("refreshToken")
			})
			.finally(() => setQueryState(curr => ({...curr,
				isQuerying: false,
			})))
	}
	/******************** VALUE ********************/
	const value = useMemo(() => {
		return {
			isOpen,
			setIsOpen,
			register,
			queryState,
			reset,
			login,
			user,
			isAuthorized,
			getUser,
			logout,
			getProducts,
			products
		}
	}, [isOpen, setIsOpen, register, queryState, setQueryState, login, user, isAuthorized, getUser, getProducts, products])

	/******************** RETURN ********************/
	return <AppContext.Provider value={value}>
		{children}
	</AppContext.Provider>
}

export const useAppContext = () => {
	return useContext(AppContext) as AppContextInterface
}

export default AppProvider
