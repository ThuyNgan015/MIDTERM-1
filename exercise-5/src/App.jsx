import Cart from "./components/cart.jsx"
import { AVAILABLE_CART } from "./data.js";

function App() {
  return (
  <>{/* Your code  here */}
      {AVAILABLE_CART.map((cart, index) => (
      <Place key={index} cart={cart} />
    ))}
  </>
);
}

export default App;
