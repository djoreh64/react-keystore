import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice'
import { addFavourite, removeFavourite} from '../redux/slices/favouritesSlice'

const Card = ({id, name, price, cover}) => {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.name === name))
    
    const favouriteItem = useSelector(state => state.favourites.items.find(obj => obj.name === name))
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

    const onClickFavourites= (e) => { 
        e.preventDefault()
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
        <Link to={`/games/${id}`}>
            <div className="card">
                <Link to={cartItem ? '/cart' : ''} onClick={onClickCartAdd} className={cartItem ? 'card__add-to-cart active' : 'card__add-to-cart'}>{cartItem ? 'В корзинe' : 'В корзину'}</Link>
                <svg onClick = {onClickFavourites} className={favouriteItem ? 'card__add-to-fav icon_active' : 'card__add-to-fav' } width="35px" height="35px" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#e8e8e8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="card__img" style={{backgroundImage: `url(${cover})`}}/>
                <div className="card__text">
                    <div className='card__text_holder'>
                    <h4 className="card__headline">{name}</h4>
                    <div className="card__price">{price} ₽</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card