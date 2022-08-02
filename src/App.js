import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"

import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {


  return (
   <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter >
   </div>
  );
}



export default App;
