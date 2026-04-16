import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useContext(CartContext);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const handleApplyPromo = () => {
    if (!promoCode) {
      setError("Enter promo code");
      return;
    }

    if (promoCode === "SAVE10") {
      setDiscount(0.1);
      setError("");
    } else {
      setDiscount(0);
      setError("Invalid promo code");
    }
  };

  const finalPrice = totalPrice - totalPrice * discount;

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Cart is empty</h1>
        <Link to="/">Return to catalog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart Page</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      {/* 🔽 ПРОМОКОД */}
      <div style={{ marginTop: "20px" }}>
        <h3>Promo code</h3>

        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter code"
        />

        <button onClick={handleApplyPromo} style={{ marginLeft: "10px" }}>
          Apply
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      {/* 🔽 ИТОГ */}
      <div style={{ marginTop: "20px" }}>
        <p>Total price: ${totalPrice.toFixed(2)}</p>

        {discount > 0 && (
          <p>Discount: -{(discount * 100).toFixed(0)}%</p>
        )}

        <h2>Final price: ${finalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;