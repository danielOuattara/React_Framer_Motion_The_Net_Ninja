import React from "react";
import { Link } from "react-router-dom";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let activeClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={activeClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      {pizza.toppings.length > 0 && (
        <Link to="/order">
          <button>Order</button>
        </Link>
      )}
    </div>
  );
};

export default Toppings;
