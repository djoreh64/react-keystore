import React from 'react'
import { setGenre } from "../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
type GenresProps = {
  setCurrentPage: any
}

const Genres: React.FC<GenresProps> = ({setCurrentPage}) => {
  const dispatch = useDispatch()
  const genreValue = useSelector(state => state.filter.genre)
  const [spread, setSpread] = useState<boolean>(false)
  const setGenreValue = (id) => {
      dispatch(setGenre(id))
  }
  const spreadRef = React.useRef<HTMLDivElement>(null)
  const onClickButton = () => {
    setSpread(!spread)
  }

  document.body.addEventListener('click', (e: any) => {
    if (!e.composedPath().includes(spreadRef.current)) {
      setSpread(false)
    }
  })

  const genres = [
    {name: 'Все', genreProperty: 'all'},
    {name: 'Экшен', genreProperty: 'action'},
    {name: 'Ролевые', genreProperty: 'rpg'},
    {name: 'Шутеры', genreProperty: 'shooter'},
    {name: 'Стратегии', genreProperty: 'strategy'},
    {name: 'Головоломки', genreProperty: 'puzzle'},
    {name: 'Хорроры', genreProperty: 'horror'},
    {name: 'Платформеры', genreProperty: 'platformer'},
    {name: 'Рогалики', genreProperty: 'roguelike'},
    {name: 'Метроидвании', genreProperty: 'metroidvania'},
    {name: 'Приключения', genreProperty: 'adventure'},
    {name: 'Гонки', genreProperty: 'racing'},
    {name: 'Песочницы', genreProperty: 'sandbox'},
  ]
  
    return (
        <div className="genres__holder">
          {genres
          .slice(0,5)
          .map((genre) => (
              <a key={genre.name} onClick={() => {
                setGenreValue(genre);
                setCurrentPage(0)}} 
               className = {genreValue.genreProperty == genre.genreProperty ? 'genre-btn checked-genre' : 'genre-btn'}>{genre.name}</a>
          ))}
          <div ref={spreadRef} className="genres__spread">
            <div onClick={onClickButton} className="genres__button genre-btn">Ещё</div>
            <div className={spread ? "genres__ul" : "genres__ul genres__ul_hide"}>
            <ul>
              {genres
              .slice(5)
              .map((genre) => (
                <a key={genre.name} onClick={() => {
                  setGenreValue(genre);
                  setCurrentPage(0);
                  setSpread(false)}} 
                 className = {genreValue.genreProperty == genre.genreProperty ? 'genre-btn checked-genre' : 'genre-btn'}>{genre.name}</a>
            ))}
            </ul>
            </div>
          </div>
        </div>
    )
  }

export default Genres