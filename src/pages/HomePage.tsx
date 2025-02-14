import Fooditem from "../components/FoodItems/FoodItem";
import Navbar from "../components/Navbar/Navbar";
import AddItem from "../components/AddItemButton/AddItem";
// HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <AddItem/>
      <Fooditem/>
    </div>
  );
};

export default HomePage;
