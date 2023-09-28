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
              <a key={index} onClick={() => setActiveCategory(index)} className = {activeCategory == index ? 'genre-btn checked-genre' : 'genre-btn'}>{genre}</a>
          ))}
          </div>
          <div className='genre__section_sort'>
          <a href="#"><svg className='sort_icon' width="66" height="42" viewBox="0 0 66 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33 0L65.0429 42H0.957062L33 0Z" fill="#E8E8E8"/>
          </svg></a>
            Сортировать по: <a className='sort_btn' href="#">популярности</a>

            <div className='sort_popup'>
            <ul>
              <a href="#"><li className='sort_active'>популярности</li></a>
              <a href="#"><li>цене</li></a>
              <a href="#"><li>алфавиту</li></a>
            </ul>
          </div>
          </div>
      </div>
    )
  }

export default Genres