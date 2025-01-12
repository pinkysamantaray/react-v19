import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";

const App = () => {
  const cartHook = useState([]);

  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Pixel Perfect Pizzas"),
//     React.createElement(Pizza, {
//       name: "The Pepperoni Pizza",
//       description: "Mozzarella Cheese, Pepperoni",
//     })
//   ]);
// };

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
