import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

interface AppContextInterface {
	isOpen: boolean|null,
	setIsOpen: Function
}

const AppContext = createContext<AppContextInterface|null>(null)

const AppProvider = ({children}: {children: React.ReactNode}) => {
	const [isOpen, setIsOpen] = useState<boolean|null>(null)

	useEffect(() => {
		console.log(isOpen);
	},[isOpen])

	const value = useMemo(() => {
		return {
			isOpen,
			setIsOpen,
		}
	}, [isOpen, setIsOpen])
	return <AppContext.Provider value={value}>
		{children}
	</AppContext.Provider>
}

export const useAppContext = () => {
	return useContext(AppContext) as AppContextInterface
}

export default AppProvider
