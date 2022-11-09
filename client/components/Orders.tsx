import Order from "./Order";

export default function Orders({orders}: {orders: any[]}) {
	return (
		<>
			{orders.length > 0 ? <Order /> : "You have no orders yet"}
		</>
	)
}
