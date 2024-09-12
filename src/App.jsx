
import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import { Fragment } from 'react';
import Shop from './screen/shop';
import ProductPage from './screen/Product';
import CartPage from './screen/account/cart';
import WishlistPage from './screen/account/wishlist';
import CollectionList from './screen/collection-list';
import { ReviewListPage } from './screen/review-list';
import VendorProfile from './screen/vendor/profile';
import BecomeVendor from './screen/vendor/become-vendor';
import VendorDashboard from './screen/vendor/vendor-dashboard';
function App() {

  return (
    <Fragment>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collection-list" element={<CollectionList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/account/cart" element={<CartPage />} />
        <Route path="/account/wishlist" element={<WishlistPage />} />
        <Route path="/review-list" element={<ReviewListPage />} />
        <Route path="/vendor/profile" element={<VendorProfile />} />
        <Route path="/become-vendor" element={<BecomeVendor />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />

      </Routes>
      <ToastContainer />
    </Fragment>
  )
}

export default App
