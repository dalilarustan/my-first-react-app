import logo from './logo.svg';
import favicon from "./assets/favicon.ico"
import Navbar from './components/navBar/navBar.jsx';
import CartWidget from './components/CartWidget/CartWidget';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenido/a a nuestra tienda en línea!" />}/>
        <Route path='*' element={<div>ERROR: 404 La página no existe</div>} />
      </Routes>
      
    </>
  );
}

export default App;
