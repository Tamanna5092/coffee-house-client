import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./coffeeCard";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <h1>This is home page: {coffees.length}</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 my-20 md:grid-cols-2">
      {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default Home;
