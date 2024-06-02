import { Navigate, Route, Routes } from "react-router-dom";

//pages routes
import Layout from "./Layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import NotFoundPage from "./pages/404";
//style
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
