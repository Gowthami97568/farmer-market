import { useCartStore } from "../stores/cartStore";
import { useOrderStore } from "../stores/ordersStore";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const items = useCartStore((state) => state.items);
  const placeOrder = useOrderStore((state) => state.placeOrder);
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const handlePayment = () => {
    // 💳 Fake Payment Popup
    const confirmPayment = window.confirm(
      `Pay ₹${total} using UPI/Card?`
    );

    if (confirmPayment) {
      placeOrder(items);
      navigate("/success");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Checkout 💳</h1>

      <h2>Total: ₹{total}</h2>

      <button
        onClick={handlePayment}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Pay & Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;