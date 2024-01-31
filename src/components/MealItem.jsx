import { useContext } from "react";
import formatter from "../utils/formatting.js";
import Button from "./Button.jsx";
import CartContext from "../contexts/CartContext.jsx";
export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleMealtocart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="meal-lgo" />
        <div>
          <h2>{meal.name}</h2>
          <p className="meal-item-price">{formatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleMealtocart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
