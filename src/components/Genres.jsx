import React, { useState } from 'react';

function Genres() {

  const [activeCategory, setActiveCategory] = useState(0)

  const genres = [
    'Все',
    'Симуляторы',
    'Стратегии',
    'Шутеры',
    'Экшен',
    'Приключения',
    'Другие жанры',
  ]


    return (
      <div className="genre__section">
        <div className="genres__holder">
          {genres.map((genre, index) => (
              <a onClick={() => setActiveCategory(index)} className = {activeCategory == index ? 'genre-btn checked-genre' : 'genre-btn'}>{genre}</a>
          ))}
          </div>
      </div>
    )
  }

export default Genres