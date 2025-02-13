import "./FoodItem.css";
import { FoodItems } from "./Fooditem.utils";

const Fooditem = () => {
  return (
    <div>
      <h1 className="food-heading"> 🍔 Our Delicious Food Items 🍗</h1>
      <div className="food-grid">
        {FoodItems.map((item, index) => {
          return (
            <div className="food-card" key={`${index}-${item.name}`}>
              <img src={item.image} />
              <div className="food-title">
                {item.name} ➡️ {item.price}
              </div>
            </div>
          );
        })}

       
      </div>
    </div>
  );
};
export default Fooditem;
