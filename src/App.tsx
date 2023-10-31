import React from 'react'
import Home from './pages/Home'
import Game from './pages/Game/Game'
import Cart from './pages/Cart'
import Favourites from './pages/Favourites'
import NotFound from './pages/NotFound'
import { Route, Routes }  from 'react-router-dom'
import SignIn from './pages/SignIn'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<MainLayout/>}>
        <Route path='' element= {<Home />}/>
        <Route path='/cart' element= {<Cart />}/>
        <Route path='/signin' element= {<SignIn/>}/>
        <Route path='/games/:urlID' element= {<Game/>}/>
        <Route path='/favourites' element= {<Favourites/>}/>
        <Route path='*' element= {<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
