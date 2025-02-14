
import { FoodItems  } from "../FoodItems/Fooditem.utils";
import "./AddItem.css"
import React, { useState } from "react";
const AddItem =()=>{
    const [randomFoodItems, setRandomFoodItems] = useState<
    { name: string; price: string; image: string }[]
  >([]);

  const PickRandomFood = () => {
    const randomIndex = Math.floor(Math.random() * FoodItems.length);
    const randomFood = FoodItems[randomIndex];
    setRandomFoodItems((prevItems) => {
      if (!prevItems.find((item) => item.name === randomFood.name)) {
        return [...prevItems, randomFood]; 
      }
      return prevItems; 
    });
  };
    return(
        <div>
            <div className="Btn-Add">
            <button className="random-food-button" onClick={PickRandomFood}>
          Pick a Random Food Item
        </button>
        <button id="Reset-Btn" className="random-food-button" onClick={() => setRandomFoodItems([])}>
    Reset 
  </button>
            </div>
        {randomFoodItems.length > 0 && (
        <div className="random-food-section">
          <h2>🍴 Your Random Picks 🍴</h2>
          <div className="food-grid">
            {randomFoodItems.map((item, index) => (
              <div className="food-card" key={`${index}-${item.name}`}>
                <img src={item.image} alt={item.name} />
                <div className="food-title">
                  {item.name} ➡️ {item.price}
                </div>
              </div>
            ))}
          </div> 
        </div>
      )}

        </div>

    );


}
export default AddItem;