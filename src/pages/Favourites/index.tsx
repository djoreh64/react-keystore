import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Favourites.module.scss'
import FavouritesItem from '../../components/FavouritesItem.tsx'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store.ts'

const Favourites: React.FC = () => {
    const favouritesItems = useSelector((state: RootState) => state.favourites.items)

    return (
        <div className={styles.main}>
            {favouritesItems.length === 0 &&
                <div className={styles.favourites__empty}>
                    <h1 className={styles.favourites__empty_headline}>Список избранного пуст!</h1>
                    <Link to='/#' className={styles.favourites__button}>На главную</Link>
                </div>
            }
            <div className={styles.favourites}>
                {favouritesItems.map((item) => {
                    return <FavouritesItem key = {item.name} {...item}/>
                })}
            </div>
        </div>
    )
}

export default Favourites