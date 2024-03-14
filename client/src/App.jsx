import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Panes from './pages/Products/Panes'
import Tortas from './pages/Products/Tortas'
import Dulces from './pages/Products/Dulces'
import AboutUs from './pages/AboutUs'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/panes' element={<Panes/>}/>
        <Route path='/tortas' element={<Tortas/>}/>
        <Route path='/dulces' element={<Dulces/>}/>
        <Route path='/sobre-nosotros' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}
