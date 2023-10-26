import React, { useEffect, useState } from 'react'
import Genres from '../components/Genres'
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'
import Sort from '../components/Sort'
import ReactPaginate from 'react-paginate';
import { SearchContext } from '../App'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGames } from '../redux/slices/gamesSlice'

const Home = () => {
    const dispatch = useDispatch()
    const {searchText} = React.useContext(SearchContext)
    let { games, status} = useSelector(state => state.games)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const sortIcon = useSelector(state => state.filter.sortIcon)
    const sortType = useSelector(state => state.filter.sort)
    const genreValue = useSelector(state => state.filter.genre)
    const swithcher = require('ai-switcher-translit');

    const getGames = async () => {
        setIsLoading(true)
        try {
            dispatch(fetchGames({
                genreValue,
                sortType,
                sortIcon,
                currentPage
            }))
            setIsLoading(false)
        } catch (err) {
            alert(`Произошла ошибка: ${err}!`)
        }
    }

    useEffect(() => {
        getGames()
    }, [genreValue, sortType, sortIcon, currentPage])

    return (
        <>
            <section className="main-section">
            <div className="genre__section">
            <Genres setCurrentPage={setCurrentPage}/>
            <Sort/>
            </div>
                <div className="card-holder">
                    {status === 'loading'
                    ? [...new Array(20)].map((_, i) => {return <CardSkeleton key = {i}/>}) 
                    : games = games.filter((obj) => swithcher.getSwitch(obj.name.toLowerCase(), {type: 'engru',}).includes(searchText.toLowerCase()) || obj.name.toLowerCase().includes(searchText.toLowerCase()))
                    .map(game => {return <Card key={game.name} {...game}/>})}
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