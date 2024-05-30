import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home";
import ProductDetails from "./components/productDetail/ProductDetails";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productDetail/:id" element={<ProductDetails />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
