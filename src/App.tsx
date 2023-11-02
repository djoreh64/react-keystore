import React from 'react'
import Home from './pages/Home.tsx'
import Game from './pages/Game/Game.tsx'
import Cart from './pages/Cart/index.tsx'
import Favourites from './pages/Favourites/index.tsx'
import NotFound from './pages/NotFound/index.tsx'
import { Route, Routes }  from 'react-router-dom'
import SignIn from './pages/SignIn/index.tsx'
import MainLayout from './layouts/MainLayout.tsx'

const App: React.FC = () => {
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
