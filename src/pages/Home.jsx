import React, { useEffect, useState } from 'react';
import Genres from '../components/Genres'
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton';

const Home = () => {
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://6516e83f09e3260018ca764a.mockapi.io/items')
    .then((res) => {
        return res.json();
    })
    .then((arr) => {
        setGames(arr)
        setIsLoading(false)
    })
    }, [])

    return (
        <>
        <Genres/>
            <div className="card-holder">
                {isLoading
                ? [...new Array(20)].map((_, i) => {return <CardSkeleton key = {i}/>}) 
                : games.map(game => {return <Card key={game.cover} {...game}/>})}
            </div>
        </>
    )
}

export default Home