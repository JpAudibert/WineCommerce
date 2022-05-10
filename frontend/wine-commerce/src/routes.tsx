import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import Login from "./pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
