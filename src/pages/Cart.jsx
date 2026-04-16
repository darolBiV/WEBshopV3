import { useContext } from "react";
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
            <button type="button" onClick={() => decreaseQuantity(item.id)}>
              -
            </button>
            <button type="button" onClick={() => increaseQuantity(item.id)}>
              +
            </button>
            <button type="button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h2>Total price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;