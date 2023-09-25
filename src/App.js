import React from 'react';
import Header from './components/Header'
import Genres from './components/Genres'
import Card from './components/Card'
import games from './assets/games.json'

function App() {
  return (
    <div className="wrapper">
    <Header/>
    <main className="main">
        <section className="main-section">
            <Genres/>
            <div className="card-holder">
                {games.map((game) => (
                  <Card title = {game.name} price = {game.price} image = {game.cover}/>
                ))}
            </div>
        </section>
    </main>
</div>
  );
}

export default App;
