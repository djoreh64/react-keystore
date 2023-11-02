import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { addItem } from '../../redux/slices/cartSlice.js'
import { addFavourite, removeFavourite } from '../../redux/slices/favouritesSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import styles from './Game.module.scss'
import { useState } from 'react'
import GameSkeleton from '../../components/GameSkeleton.tsx'

type gameType = {
  id: string, 
  name: string,
  price: number, 
  cover: string
}

const Game: React.FC = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [game, setGame] = React.useState<gameType>([])
  const {id, name, price, cover} = game
  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id))
  const favouriteItem = useSelector(state => state.favourites.items.find(obj => obj.id === id))
  const { urlID } = useParams()

  React.useEffect(() => {
    async function fetchGames() {
      setIsLoading(true)
      try {
        const { data } = await axios.get(`https://6516e83f09e3260018ca764a.mockapi.io/items/${urlID}`)
        setGame(data)
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка при получении данных!')
      }
    }
    fetchGames()
  }, [])

  const onClickCartAdd = () => {
    if (!cartItem) {
        const item = {
            id,
            name,
            price,
            cover,
            count: 1
        }
        dispatch(addItem(item))
    } 
}

const onClickFavourite = () => {
  if (favouriteItem) {
    dispatch(removeFavourite(name))
  } else {
    const item = {
        id,
        name,
        price,
        cover
    }
    dispatch(addFavourite(item))
  }
}

  return (
    <div className={styles.game}>
      {isLoading 
      ? <GameSkeleton/>
      : <>
      <div className={styles.game__cover} style={{backgroundImage:`url(${cover})`}}/>
      <div className={styles.game__info}>
        <div className={styles.game__headlineBlock}>
        <h1 className={styles.game__headline}>{name}</h1>
        <svg onClick = {onClickFavourite} className={`${!favouriteItem ? styles.game__add_to_favourite : styles.game__add_to_favourite_active }`} width="40px" height="40px" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#e8e8e8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <div className={styles.game__price}>{price}₽</div>
        <Link to={cartItem ? '/cart' : ''} onClick={onClickCartAdd} className={`${cartItem ? styles.game__add_to_cart_active : styles.game__add_to_cart}`}>{cartItem ? 'В корзинe' : 'В корзину'}</Link>
      </div>
      </> 
      }
      
    </div>
  )
}

export default Game
