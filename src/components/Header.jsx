import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./Button";
import Items from "./Items";
import CartContext from "../contexts/CartContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <div id="main-header">
      <header id="title">
        <img src={logo} alt="App-logo" />
        <h2 id="title">Food App</h2>
      </header>
      <Button>Cart {totalCartItems} </Button>
    </div>
  );
}
