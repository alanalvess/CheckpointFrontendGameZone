import { CartProvider } from "./contexts/CartContext";
import RouteList from "./routes";

const App = () => {
  return (
    <CartProvider>
      <RouteList />
    </CartProvider>
  );
};
export default App;
