import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home";
import ProductDetails from "./components/productDetail/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productDetail" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
