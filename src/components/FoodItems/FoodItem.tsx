import "./FoodItem.css"
const Fooditem=()=>{

    return(
     <div>
         <h1  className="food-heading"> 🍔 Our Delicious Food Items 🍗</h1>
             <div className="food-grid">
                  <div className="food-card">
                   <img src="/MyApp-Assets/pngwing.com.png" />
                   <div className="food-title">Delicious Zinger Burger ➡️ $13</div>
             </div>

              <div className="food-card">
                  <img src="/MyApp-Assets/pngwing.com (1).png"  />
                   <div className="food-title">Hot Wings ➡️$10</div>
               </div>

              <div className="food-card">
                     <img src="/MyApp-Assets/pngwing.com (2).png" />
                     <div className="food-title">Roasted Chicken Pieces ➡️$15</div>
                </div>

               <div className="food-card">
                  <img src="/MyApp-Assets/pngwing.com (3).png" />
                  <div className="food-title">Turkish Stuffed Eggplant ➡️$12</div>
                </div>
                  <div className="food-card">
                     <img src="/MyApp-Assets/menu1.png" />
                      <div className="food-title">Paneer Tikka ➡️$100</div>

                 </div>
                 <div className="food-card">
                     <img src="/MyApp-Assets/menu2.png" />
                      <div className="food-title">Delicious Platter ➡️$200</div>

                 </div>
                 <div className="food-card">
                     <img src="/MyApp-Assets/menu3.png" />
                      <div className="food-title">Chicken Nodels ➡️$100</div>

                 </div>
                 <div className="food-card">
                     <img src="/MyApp-Assets/pngwing.com.png" />
                      <div className="food-title">Delicious Zinger Burger ➡️ $13</div>

                 </div>
                

          </div>
        </div>
        )
}
export default Fooditem