
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";
import React from "react";

const LandingPage = () => {
  const navigate = useNavigate();

  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* 🔥 NAVBAR */}
      <div style={navbarStyle}>
        <h2 style={{ cursor: "pointer" }}>🌱 Farmer Market</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <span style={navItem} onClick={() => navigate("/")}>Home</span>
          <span style={navItem} onClick={() => navigate("/products")}>Products</span>
          <span style={navItem}>Contact</span>
        </div>

        {/* 🛒 CART */}
        <div
          onClick={() => navigate("/cart")}
          style={{ position: "relative", cursor: "pointer", fontSize: "22px" }}
        >
          🛒
          {totalItems > 0 && (
            <span style={cartCount}>
              {totalItems}
            </span>
          )}
        </div>
      </div>

      {/* HERO */}
      <div style={heroStyle}>
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "42px" }}>Fresh Farmer Market 🌱</h1>
          <p>Buy fresh fruits & vegetables directly from farmers.</p>

          <button
            onClick={() => navigate("/products")}
            style={btnStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Shop Now →
          </button>
        </div>

        <img
          src="https://hips.hearstapps.com/hmg-prod/images/fresh-vegetables-in-basket-on-wooden-background-royalty-free-image-1676394780.jpg"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* CATEGORIES */}
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Shop by Category</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "30px" }}>
          {["Vegetables 🥕", "Fruits 🍎"].map((cat, i) => (
            <div
              key={i}
              onClick={() => navigate("/products")}
              style={cardStyle}
              onMouseOver={(e) => hoverCard(e, true)}
              onMouseOut={(e) => hoverCard(e, false)}
            >
              <img
                src={
                  i === 0
                    ? "https://hips.hearstapps.com/hmg-prod/images/fresh-vegetables-in-basket-on-wooden-background-royalty-free-image-1676394780.jpg"
                    : "https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/04/ways-to-eat-more-fruit.jpg"
                }
                width="150"
                style={{ borderRadius: "10px" }}
              />
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>{cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ background: "#f3f4f6", padding: "50px", textAlign: "center" }}>
        <h2>Why Choose Us?</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "30px" }}>
          {[
            { title: "🌱 Fresh", desc: "Direct from farmers" },
            { title: "🚚 Fast Delivery", desc: "Quick delivery" },
            { title: "💰 Best Prices", desc: "Affordable rates" }
          ].map((item) => (
            <div
              key={item.title}
              style={{ transition: "0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div style={{ padding: "60px 20px", background: "#f9fafb" }}>
        <h2 style={{ textAlign: "center" }}>Contact Us 📩</h2>

        <div style={contactWrapper}>
          <div>
            <h3>Get in Touch</h3>
            <p>📍 Hyderabad, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 farmersmarket@gmail.com</p>
          </div>

          <div style={{ width: "300px" }}>
            <input placeholder="Name" style={inputStyle} />
            <input placeholder="Email" style={inputStyle} />
            <textarea placeholder="Message" rows={4} style={inputStyle}></textarea>

            <button onClick={() => alert("Message sent!")} style={btnStyle}>
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "#16a34a", color: "white", padding: "20px", textAlign: "center" }}>
        © 2026 Farmer Market 🌱
      </div>
    </div>
  );
};

/* ✅ FIXED TYPES */
const navbarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 40px",
  background: "#16a34a",
  color: "white",
  position: "sticky",
  top: 0,
  zIndex: 100
};

const navItem: React.CSSProperties = { cursor: "pointer" };

const cartCount: React.CSSProperties = {
  position: "absolute",
  top: "-8px",
  right: "-10px",
  background: "red",
  color: "white",
  borderRadius: "50%",
  padding: "3px 7px",
  fontSize: "12px"
};

const heroStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "60px 40px",
  background: "linear-gradient(to right, #4ade80, #16a34a)",
  color: "white"
};

const btnStyle: React.CSSProperties = {
  marginTop: "20px",
  padding: "12px",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer"
};

const imgStyle: React.CSSProperties = {
  width: "300px",
  borderRadius: "10px",
  transition: "0.3s"
};

const cardStyle: React.CSSProperties = {
  cursor: "pointer",
  padding: "20px",
  background: "#fff",
  borderRadius: "10px",
  transition: "0.3s"
};

const contactWrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  marginTop: "30px",
  flexWrap: "wrap"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

/*  FIXED TYPES */
const hoverCard = (e: React.MouseEvent<HTMLDivElement>, hover: boolean) => {
  if (hover) {
    e.currentTarget.style.transform = "translateY(-10px)";
  } else {
    e.currentTarget.style.transform = "translateY(0)";
  }
};
export default LandingPage;