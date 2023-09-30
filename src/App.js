import React, { useEffect, useState } from 'react';
import Home from './pages/Home'
import Header from './components/Header'
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <section className="main-section">
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='*' element= {<NotFound/>}/>
          </Routes>
        </section>
    </main>
    </>
  );
}

export default App;
