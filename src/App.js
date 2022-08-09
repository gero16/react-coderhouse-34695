import {React} from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {


  return (
   <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/detail/:Id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          
        </Routes>
      </BrowserRouter >
   </div>
  );
}



export default App;
