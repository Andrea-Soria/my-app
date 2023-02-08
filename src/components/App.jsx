
/*import { BrowserRouter, Routes, Route } from 'react-router-dom'*/
import './App.css'

import Navbar from "./Navbar/Navbar"
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
import ItemCount from './ItemCount/ItemCount'

export const App = () => {
  return (
    <>
   
      <Navbar/>
      <ItemListContainer/>
      <ItemCount valorInicial={1} stock={20}/>
  
    
    </>
  )
}
