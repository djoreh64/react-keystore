import React from 'react';
import Header from './components/Header'
import Genres from './components/Genres'
import Card from './components/Card'

function App() {
  return (
    <div className="wrapper">
    <Header/>
    <main className="main">
        <section className="main-section">
            <Genres/>
            <div className="card-holder">
                <Card title = "God Of War" price = {3999 + ' руб'}/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    </main>
</div>
  );
}

export default App;
