import React from "react";

export type ButtonPropsType = {
	children: React.ReactNode,
	primary: boolean,
	shouldGrow: boolean,
	className?: string
}

export type TitlePropsType = {
	title: string,
	variant?: string
}

export type ToastPropsType = {
	text: string, id: string
}
