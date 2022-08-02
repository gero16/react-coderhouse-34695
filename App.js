import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const onAdd = (qty) => {
    alert(`Agregaste ${qty}`)
  }
  return (
   <div className='App'>
      <Navbar />
      <ItemCount onAdd={onAdd} initial={1} stock={10} />
   </div>
  );
}

export default App;