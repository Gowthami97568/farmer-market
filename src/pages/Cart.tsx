import { useCartStore } from "../stores/cartStore";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { items, removeItem, increaseQty, decreaseQty } = useCartStore();
  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "30px", background: "#f9fafb", minHeight: "100vh" }}>
      <h1>Your Cart 🛒</h1>

      {items.length === 0 ? (
        <h3 style={{ marginTop: "20px" }}>Cart is empty 😢</h3>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.productId}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "20px",
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

              {/* DETAILS */}
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p style={{ color: "green" }}>₹{item.price}</p>

                {/* ➕➖ */}
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <button onClick={() => decreaseQty(item.productId)}>➖</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.productId)}>➕</button>
                </div>
              </div>

              {/* ❌ REMOVE */}
              <button
                onClick={() => removeItem(item.productId)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <h2>Total: ₹{totalPrice}</h2>

          {/* ✅ CHECKOUT BUTTON (CORRECT PLACE) */}
          <button
            onClick={() => navigate("/checkout")}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Proceed to Checkout →
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;