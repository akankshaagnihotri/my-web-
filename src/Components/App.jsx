import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
// import Navbar from './Footer'
import Footer from './Footer'
import Intouch from './Intouch'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/form' element={<Intouch/>}></Route>
    </Routes>
    <Footer/>
    
    </BrowserRouter>


    
    </>



    
  )
}
