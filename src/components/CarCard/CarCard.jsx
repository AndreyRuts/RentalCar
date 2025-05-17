import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addToFavorites, removeFromFavorites } from "../../redux/favorites/slice";

import s from './CarCard.module.css';


function CarCard({ id, img, brand, year, model, type, rentalPrice, rentalCompany, mileage, address }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const isFavorite = favorites.some(car => car.id === id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, img, brand, year, model, type, rentalPrice, rentalCompany, mileage, address }));
    }
  };

  const city = address.split(' ');

  return (
    <li className={s.cardContainer}>
      <img className={s.cardImg} src={img} alt={brand} />
      <div className={s.stringContainer}>
        <div className={s.carNameInfo}>
          <p className={s.cardText}>{brand}</p>
          <p className={s.cardModelBlue}>{model}</p>
          <p className={s.cardText}>{year}</p>
        </div>
        <p className={s.cardText}>${rentalPrice}</p>
      </div>
      <p className={s.cardInfo}>{city[3].slice(0, -1)} | {city[4]} | {rentalCompany} |</p>
      <p className={s.cardInfo}>{type} | {mileage.toLocaleString('en-US').replace(/,/g, ' ')} km</p>
      <Link to={`/catalog/${id}`} className={s.detailsBtn}>Read More</Link>
      <button onClick={handleFavoriteClick} className={s.favoriteBtn}>
              {isFavorite ? 
                  <svg width="16" height="15" viewBox="0 0 16 15">
                      <use href="/sprite.svg#favoriteActive"></use>
                  </svg>
                  :
                  <svg width="16" height="15" viewBox="0 0 16 15">
                      <use href="/sprite.svg#favoriteNotActive"></use>
                  </svg>}
      </button>
    </li>
  );
}

export default CarCard;
