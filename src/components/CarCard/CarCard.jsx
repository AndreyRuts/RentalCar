import { Link } from 'react-router-dom';

import s from './CarCard.module.css';

function CarCard({ id, img, brand, year, model, type, rentalPrice, rentalCompany, mileage, address }) {
    const arr = address;
    const city = arr.split(' ');

    return (
        <>
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
                <p className={s.cardInfo}>{type} | {mileage}</p>
                <Link to={`/catalog/${id}`} className={s.detailsBtn}>Read More</Link>
            </li>
        </>
    )
  }
  
export default CarCard;