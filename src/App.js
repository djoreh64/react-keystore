import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Favourites from './pages/Favourites'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import SignIn from './pages/SignIn'

function App() {
  return (
    <>
      <Header/>
      <main className="main">
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='/favourites' element= {<Favourites/>}/>
            <Route path='/signin' element= {<SignIn/>}/>
            <Route path='*' element= {<NotFound/>}/>
          </Routes>
    </main>
    </>
  );
}

export default App;
