
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/itemListContainer/itemListContainer"

function App() {
  return (
   <div className='App'>
      <Navbar />

      <ItemListContainer greeting="Bienvenidos al mejor Mercado Web!" />
   </div>
  );
}

export default App;
