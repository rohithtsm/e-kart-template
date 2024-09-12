import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "./assets/scss/app.scss";
import CartContextProvider from "./helpers/cart/CartContext";
import { WishlistContextProvider } from "./helpers/wishlist/WishlistContext";
// import SettingProvider from "./helpers/theme-setting/SettingProvider";
import { CompareContextProvider } from "./helpers/Compare/CompareContext.jsx";
import { CurrencyContextProvider } from "./helpers/Currency/CurrencyContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <SettingProvider> */}
        {/* <CompareContextProvider> */}
          <CurrencyContextProvider>
            <CartContextProvider>
              <WishlistContextProvider>
                {/* <FilterProvider> */}
                  <App  />
                {/* </FilterProvider> */}
              </WishlistContextProvider>
            </CartContextProvider>
          </CurrencyContextProvider>
          {/* <ThemeSettings /> */}
        {/* </CompareContextProvider> */}
      {/* </SettingProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
