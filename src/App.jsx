import Header from "./components/Header";
import Items from "./components/Items";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Items />
    </CartContextProvider>
  );
}

export default App;
