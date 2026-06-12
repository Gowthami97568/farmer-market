import { useOrderStore } from "../stores/ordersStore";

const OrdersPage = () => {
  const { orders } = useOrderStore();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Orders 📦</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ marginBottom: "20px" }}>
            <h3>Order #{order.id}</h3>

            {order.items.map((item) => (
              <p key={item.productId}>
                {item.name} × {item.quantity}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;