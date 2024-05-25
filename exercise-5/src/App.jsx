import Cart from "./components/cart.jsx"
import { AVAILABLE_CART } from "./data.js";

function App() {
  return (
  <>{/* Your code  here */}
      <header>
      <h1>My Items</h1>
    </header>
      <li>{AVAILABLE_CART.map((cart, index) => (
      <Cart key={index} cart={cart} />
    ))}
    </li>
  </>
);
}

export default App;
