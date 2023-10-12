import React, { useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Favourites from './pages/Favourites'
import Header from './components/Header'
import NotFound from './pages/NotFound'
import { Route, Routes }  from 'react-router-dom'
import SignIn from './pages/SignIn'

export const SearchContext = React.createContext()

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [searchText, setSearchText] = useState('')
  return (
    <>
    <SearchContext.Provider value={{searchText, setSearchText, searchValue, setSearchValue}}>
      <Header/>
      <main className="main">
          <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='/favourites' element= {<Favourites/>}/>
            <Route path='/signin' element= {<SignIn/>}/>
            <Route path='*' element= {<NotFound/>}/>
          </Routes>
    </main>
    </SearchContext.Provider>
    </>
  );
}

export default App;
