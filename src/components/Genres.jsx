function Genres({ genreValue, setGenreValue}) {
  const genres = [
    {name: 'Все', genreProperty: 'all'},
    {name: 'Экшен', genreProperty: 'action'},
    {name: 'Стратегии', genreProperty: 'strategy'},
    {name: 'Шутеры', genreProperty: 'shooter'},
    {name: 'Платформеры', genreProperty: 'platformer'},
    {name: 'Рогалики', genreProperty: 'roguelike'},
    {name: 'Метроидвании', genreProperty: 'metroidvania'},
  ]
    return (
        <div className="genres__holder">
          {genres.map((genre, index) => (
              <a key={index} onClick={() => setGenreValue(genre)} className = {genreValue.genreProperty == genre.genreProperty ? 'genre-btn checked-genre' : 'genre-btn'}>{genre.name}</a>
          ))}
        </div>
    )
  }

export default Genres