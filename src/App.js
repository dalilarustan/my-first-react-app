import logo from './logo.svg';
import favicon from "./assets/favicon.ico"
import Navbar from './components/navBar/navBar.jsx';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Cart from "./components/Cart/Cart.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="¡Bienvenido/a a nuestra tienda en línea!" />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/> 
            <Route path='item/:itemId' element={<ItemDetailContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<div>ERROR: 404 La página no existe</div>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
