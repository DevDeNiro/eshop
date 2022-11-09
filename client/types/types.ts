import React from "react";

export type LayoutPropsType = {
	children: React.ReactNode
}

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
	text: string,
	id: string
}

export type AccountMenuPropsType = {
	letter: string
}

export type OrdersPropsType = {
	orders: any[]
}

export type OrderPropType = {}
