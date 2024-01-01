import React, { useEffect, useState } from 'react';
import Genres from '../components/Genres.tsx';
import Card from '../components/Card.tsx';
import CardSkeleton from '../components/CardSkeleton.tsx';
import Sort from '../components/Sort.tsx';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../redux/slices/gamesSlice.ts';
import { AppDispatch, RootState } from '../redux/store.ts';

const Home: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { games, status } = useSelector((state: RootState) => state.games);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const searchText = useSelector((state: RootState) => state.filter.search);
	const sortIcon = useSelector((state: RootState) => state.filter.sortIcon);
	const sortType = useSelector((state: RootState) => state.filter.sort);
	const genreValue = useSelector((state: RootState) => state.filter.genre);
	const swithcher = require('ai-switcher-translit');

	const onChangePagination = ({selected}) => {
		setCurrentPage(selected);
		window.scrollTo(0, 0);
	};

	const getGames = async () => {
		try {
			dispatch(fetchGames({
				genreValue,
				sortType,
				sortIcon,
				currentPage
			}));
		} catch (err) {
			alert(`Произошла ошибка: ${err}!`);
		}
	};

	useEffect(() => {
		getGames();
	}, [genreValue, sortType, sortIcon, currentPage]);

	return (
		<>
			<section className="main-section">
				<div className="genre__section">
					<Genres setCurrentPage={setCurrentPage}/>
					<Sort/>
				</div>
				<div className="card-holder">
					{status === 'loading'
						? [...new Array(20)].map((_, i) => {return <CardSkeleton key = {i}/>;}) 
						: games.filter((obj) => swithcher.getSwitch(obj.name.toLowerCase(), {type: 'engru'}).includes(searchText.toLowerCase()) || obj.name.toLowerCase().includes(searchText.toLowerCase()))
							.map(game => {return <Card key={game.name} {...game}/>;})}
				</div>
				{status !== 'loading' && games.length === 0 ? <div className='card-holder__not-found' style={{textAlign: 'center'}}>Ничего не найдено!</div> : ''}
				<ReactPaginate
					className='pagination'
					breakLabel="..."
					nextLabel=">"
					pageCount={games.length >= 20 ? 2 : 0}
					onPageChange={(n) => onChangePagination(n)}
					previousLabel="< "
					renderOnZeroPageCount={null}
				/>
			</section>
		</>  
	);
};

export default Home;