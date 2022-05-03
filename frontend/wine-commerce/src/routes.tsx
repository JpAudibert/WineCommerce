import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import ProductList from "./pages/ProductList";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
