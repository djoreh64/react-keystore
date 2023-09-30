import React, { useState } from 'react';
import Sort from './Sort'

function Genres() {

  const [activeCategory, setActiveCategory] = useState(0)

  const genres = [
    'Все',
    'Экшен',
    'Стратегии',
    'Шутеры',
    'Платформеры',
    'Приключения',
    'Другие жанры',
  ]


    return (
      <div className="genre__section">
        <div className="genres__holder">
          {genres.map((genre, index) => (
              <a key={index} onClick={() => setActiveCategory(index)} className = {activeCategory == index ? 'genre-btn checked-genre' : 'genre-btn'}>{genre}</a>
          ))}
          </div>
          <Sort/>
      </div>
    )
  }

export default Genres