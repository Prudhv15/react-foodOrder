import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Items() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals").then((response) => {
      response.json().then((data) => {
        setMeals(data);
      });
    });
  }, []);

  return (
    <div>
      <ul id="meals">
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
}
