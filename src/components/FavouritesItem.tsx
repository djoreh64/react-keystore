import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../pages/Favourites/Favourites.module.scss'
import { removeFavourite, addFavourite } from '../redux/slices/favouritesSlice'
import { Link } from 'react-router-dom'

type favouriteItemProps = {
    id: string,
    name: string, 
    price: number,
    cover: string
}

const FavouritesItem: React.FC<favouriteItemProps> = ( {id, name, price, cover} ) => {
    const favouriteItem = useSelector(state => state.favourites.items.find(obj => obj.name === name))
    const dispatch = useDispatch()
    const onClickRemove = (e) => { 
        e.preventDefault()
        dispatch(removeFavourite(name))
    }
    
    return (
    <Link to={`/games/${id}`}>
    <div className={styles.favourites__item}>
        <div className={styles.favourites__holder}>
            <a onClick = {onClickRemove} className = {styles.favourites__remove}>
            <svg width="20" height="20" viewBox="0 0 118 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M112.303 5.3033L8.3033 109.303M5.6967 5.3033L109.697 109.303" stroke="#252525" strokeWidth="20"/>
            </svg>
            </a>    
            <div className={styles.favourites__cover} style={{backgroundImage: `url(${cover})`}}></div>
            <div className={styles.favourites__text_holder}>
                <p className={styles.favourites__name}>{name}</p>
                <p className={styles.favourites__price}>{price} ₽</p>
            </div>
        </div>
    </div>
    </Link>)
}

export default FavouritesItem