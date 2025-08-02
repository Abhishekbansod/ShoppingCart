import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Home from './pages/homepage/Home.jsx'
// import CartPage from './pages/carts/cartPage.jsx'
import CartPage from "./pages/carts/CartPage.jsx";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path='/' element={<Home/>} />
          {/* <Route path='/products' element={<div>Products page</div>} /> */}
          <Route path='/cart' element={<CartPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)







