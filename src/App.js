
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/404";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ShopPage from "./pages/ShopPage/ShopPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path='shop/*' element={<ShopPage />} />
        <Route path='/auth' element={<AuthenticationPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
