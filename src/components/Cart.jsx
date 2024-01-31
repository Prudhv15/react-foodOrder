import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../contexts/CartContext";
import formattedCount from "../utils/formatting";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price
  );
  return (
    <Modal className="cart" open={true}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{formattedCount.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button>Close</Button>
        <Button>Checkout</Button>
      </p>
    </Modal>
  );
}
