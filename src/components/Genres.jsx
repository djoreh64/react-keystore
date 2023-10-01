function Genres({ genreValue, onClickGenre}) {

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
        <div className="genres__holder">
          {genres.map((genre, index) => (
              <a key={index} onClick={() => onClickGenre(index)} className = {genreValue == index ? 'genre-btn checked-genre' : 'genre-btn'}>{genre}</a>
          ))}
        </div>
    )
  }

export default Genres