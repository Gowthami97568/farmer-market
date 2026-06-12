import { useState } from "react";
import { products } from "../data/products";
import { useCartStore } from "../stores/cartStore";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items) || [];
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [addedId, setAddedId] = useState<number | null>(null);

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "all" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div style={{ padding: "20px", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* ✅ HEADER WITH CART */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <h1>Farmer Market 🌱</h1>

        <button
          onClick={() => navigate("/cart")}
          style={{
            background: "#16a34a",
            color: "white",
            padding: "8px 15px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          🛒 Cart ({items?.length || 0})
        </button>
      </div>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      {/* 🔘 FILTER */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {["all", "veg", "fruit"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              margin: "5px",
              padding: "6px 12px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: category === cat ? "#16a34a" : "#ddd",
              color: category === cat ? "white" : "black"
            }}
          >
            {cat === "all" ? "All" : cat === "veg" ? "Vegetables" : "Fruits"}
          </button>
        ))}
      </div>

      {/* 🧱 GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "15px"
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              background: "white",
              padding: "12px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "110px",
                objectFit: "cover",
                borderRadius: "8px",
                transition: "0.3s"
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />

            <h3 style={{ margin: "8px 0" }}>{product.name}</h3>

            <p style={{ color: "#16a34a", fontWeight: "bold" }}>
              ₹{product.price}
            </p>

            {/* ADD BUTTON */}
            <button
              onClick={() => {
                addItem({
                  productId: product.id.toString(),
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.image,
                  farmerName: "Local Farmer",
                });

                setAddedId(product.id);
                setTimeout(() => setAddedId(null), 1000);
              }}
              style={{
                marginTop: "8px",
                padding: "6px 12px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                background:
                  addedId === product.id ? "#22c55e" : "#16a34a",
                color: "white"
              }}
            >
              {addedId === product.id ? "Added ✓" : "Add"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;