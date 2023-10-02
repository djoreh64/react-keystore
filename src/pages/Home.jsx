import React, { useEffect, useState } from 'react'
import Genres from '../components/Genres'
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'
import Sort from '../components/Sort'
import ReactPaginate from 'react-paginate';


const Home = ({ searchText }) => {
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const [genreValue, setGenreValue] = useState({
        genreProperty: 'all'
    })
    const [sortIcon, setSortIcon] = useState(false)
    const [sortType, setSortType] = useState({
        name: 'рейтингу',
        sortProperty: 'rating'
    })

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://6516e83f09e3260018ca764a.mockapi.io/items?genres=${genreValue.genreProperty !== 'all' ? `${genreValue.genreProperty}` : ``}&sortBy=${sortType.sortProperty}${sortIcon ? '&order=asc' : '&order=desc'}&page=${currentPage + 1}&limit=20`)
        .then((res) => {
            return res.json();
        })
        .then((arr) => {
            setGames(arr)
            setIsLoading(false)
        })
    }, [genreValue, sortType, sortIcon, currentPage])

    return (
        <>
        <section className="main-section">
        <div className="genre__section">
        <Genres setCurrentPage={setCurrentPage} genreValue = {genreValue} setGenreValue = {(i) => setGenreValue(i)}/>
        <Sort sortIcon ={sortIcon} setSortIcon = {setSortIcon} sortType = {sortType} onClickType = {(i) => setSortType(i)}/>
        </div>
            <div className="card-holder">
                {isLoading
                ? [...new Array(20)].map((_, i) => {return <CardSkeleton key = {i}/>}) 
                : games.filter((obj) => {
                    if (obj.name.toLowerCase().includes(searchText.toLowerCase())) {
                        return true
                    } 
                    return false
                }).map(game => {return <Card key={game.cover} {...game}/>})}
            </div>
             <ReactPaginate
                className='pagination'
                breakLabel="..."
                nextLabel=">"
                pageCount={games.length < 10 ? 1 : 2}
                onPageChange={(n) => setCurrentPage(n.selected)}
                previousLabel="< "
                renderOnZeroPageCount={null}
            />
        </section>
        </>  
    )
}

export default Home