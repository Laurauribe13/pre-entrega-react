import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la tienda online de IDENTY BEAUTY!" />
    </>
  );
}

export default App;
