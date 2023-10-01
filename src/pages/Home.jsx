import React, { useEffect, useState } from 'react';
import Genres from '../components/Genres'
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton';
import Sort from '../components/Sort'


const Home = () => {
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [genreValue, setGenreValue] = useState(0)
    const [sortIcon, setSortIcon] = useState(false)
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    })

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://6516e83f09e3260018ca764a.mockapi.io/items?genres=${genreValue > 0 ? `${genreValue}` : ``}&sortBy=${sortType.sortProperty}${sortIcon ? '' : '&order=desc'}`)
        .then((res) => {
            return res.json();
        })
        .then((arr) => {
            setGames(arr)
            setIsLoading(false)
        })
    }, [genreValue, sortType, sortIcon])

    return (
        <>
        <section className="main-section">
        <div className="genre__section">
        <Genres genreValue = {genreValue} onClickGenre = {(i) => setGenreValue(i)}/>
        <Sort sortIcon ={sortIcon} setSortIcon = {setSortIcon} sortType = {sortType} onClickType = {(i) => setSortType(i)}/>
        </div>
            <div className="card-holder">
                {isLoading
                ? [...new Array(20)].map((_, i) => {return <CardSkeleton key = {i}/>}) 
                : games.map(game => {return <Card key={game.cover} {...game}/>})}
            </div>
        </section>
        </>  
    )
}

export default Home