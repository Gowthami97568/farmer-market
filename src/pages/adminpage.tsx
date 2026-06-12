import { useOrderStore } from "../stores/ordersStore";

const AdminPage = () => {
  const { orders } = useOrderStore();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard 👨‍💻</h1>

      <h3>Total Orders: {orders.length}</h3>

      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Items: {order.items.length}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;