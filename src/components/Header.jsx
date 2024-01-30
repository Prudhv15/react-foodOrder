import logo from "../assets/logo.jpg";
import Button from "./Button";
import Items from "./Items";
export default function Header() {
  return (
    <div id="main-header">
      <header id="title">
        <img src={logo} alt="App-logo" />
        <h2 id="title">Food App</h2>
      </header>
      <Button>Cart</Button>
    </div>
  );
}
