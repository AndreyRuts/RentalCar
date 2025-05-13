import s from './CarCard.module.css';
import { useNavigate } from 'react-router-dom';

function CarCard({ img, brand, year, model, type, rentalPrice, rentalCompany, mileage, address }) {
    const arr = address;
    const city = arr.split(' ');

    const navigate = useNavigate();
    const redirectToDetails = () => {
    navigate('/details');
    }

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
                <button className={s.detailsBtn} onClick={redirectToDetails}>Read More</button>
            </li>
        </>
    )
  }
  
export default CarCard;