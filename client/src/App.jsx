import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext"; 
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <UserProvider> 
      <CartProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}
