import React from 'react';
import { useState} from 'react';
import { debounce } from 'lodash';
import { setSearchValue } from '../redux/slices/filterSlice.ts';
import { useDispatch } from 'react-redux';

const Search: React.FC = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState<string>('');
	const updateSearchValue = React.useCallback(
		debounce((str: string) => {
			dispatch(setSearchValue(str));
		}, 400), []
	);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		updateSearchValue(e.target.value);
	};

	return (
		<div className="search-holder">
			<input value={value} onChange={(e) => {onChangeInput(e);}} placeholder="Найти игру или дополнение" maxLength={30} className="nav_search" type="search"/>
			<svg className="search__icon" width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className="search__icon_path" d="M9.51761 20.5049L2 28M6.33333 12.8333C6.33333 18.8164 11.1836 23.6667 17.1667 23.6667C23.1498 23.6667 28 18.8164 28 12.8333C28 6.85024 23.1498 2 17.1667 2C11.1836 2 6.33333 6.85024 6.33333 12.8333Z" stroke="#4e4e4e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
	);
};

export default Search;
