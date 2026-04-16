import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

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
      <div className="cart-empty">
        <h1>Cart is empty</h1>
        <Link to="/" className="cart-empty-link">
          Return to catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Cart</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-title">{item.title}</div>
            <div className="cart-item-subtitle">{item.subtitle}</div>

            <div className="cart-item-row">Price: ${item.price}</div>
            <div className="cart-item-row">Quantity: {item.quantity}</div>
            <div className="cart-item-row">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </div>

            <div className="cart-actions">
              <button
                type="button"
                className="cart-button"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <button
                type="button"
                className="cart-button"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
              <button
                type="button"
                className="cart-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3 className="cart-promo-title">Promo code</h3>

        <div className="cart-promo-row">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter code"
            className="cart-input"
          />

          <button
            type="button"
            onClick={handleApplyPromo}
            className="cart-button"
          >
            Apply
          </button>
        </div>

        {error && <p className="cart-error">{error}</p>}

        <div className="cart-total">
          <p>Total price: ${totalPrice.toFixed(2)}</p>

          {discount > 0 && <p>Discount: -{(discount * 100).toFixed(0)}%</p>}

          <div className="cart-final">Final price: ${finalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;