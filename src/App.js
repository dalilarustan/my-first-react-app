import logo from './logo.svg';
import favicon from "./assets/favicon.ico"
import Navbar from './components/navBar/navBar.jsx';
import CartWidget from './components/CartWidget/CartWidget';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido/a a nuestra tienda en línea!" />
    </>
  );
}

export default App;
