import React, { useEffect, useState } from 'react'
import Genres from '../components/Genres'
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'
import Sort from '../components/Sort'
import ReactPaginate from 'react-paginate';
import { SearchContext } from '../App'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Home = () => {
    const {searchText} = React.useContext(SearchContext)
    const [games, setGames] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const sortIcon = useSelector(state => state.filter.sortIcon)
    const sortType = useSelector(state => state.filter.sort)
    const genreValue = useSelector(state => state.filter.genre)
    const swithcher = require('ai-switcher-translit');

    useEffect(() => {
        setIsLoading(true)
        axios
        .get(`https://6516e83f09e3260018ca764a.mockapi.io/items?genres=${genreValue.genreProperty !== 'all' ? `${genreValue.genreProperty}` : ``}&sortBy=${sortType.sortProperty}${sortIcon ? '&order=asc' : '&order=desc'}&page=${currentPage + 1}&limit=20`)
        .then(res => {
            setGames(res.data)
            setIsLoading(false)
        })
    }, [genreValue, sortType, sortIcon, currentPage])

    return (
        <>
        <section className="main-section">
        <div className="genre__section">
        <Genres setCurrentPage={setCurrentPage}/>
        <Sort/>
        </div>
            <div className="card-holder">
                {isLoading
                ? [...new Array(20)].map((_, i) => {return <CardSkeleton key = {i}/>}) 
                : games.filter((obj) => {
                    if (swithcher.getSwitch(obj.name.toLowerCase(), {type: 'engru',}).includes(searchText.toLowerCase()) || obj.name.toLowerCase().includes(searchText.toLowerCase())) {
                        return true
                    } 
                    return false
                }).map(game => {return <Card key={game.name} {...game}/>})}
            </div>
             {games.length > 10 && <ReactPaginate
                className='pagination'
                breakLabel="..."
                nextLabel=">"
                pageCount={2}
                onPageChange={(n) => setCurrentPage(n.selected)}
                previousLabel="< "
                renderOnZeroPageCount={null}
            />}
            
        </section>
        </>  
    )
}

export default Home