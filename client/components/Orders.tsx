import Order from "./Order";
import {OrdersPropsType} from "../types/types";

export default function Orders({orders}: OrdersPropsType) {
	return (
		<>
			{orders.length > 0 ? <Order /> : "You have no orders yet"}
		</>
	)
}
