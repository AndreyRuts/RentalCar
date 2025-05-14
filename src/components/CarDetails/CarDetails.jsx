import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCarByIdThunk } from "../../redux/catalog/operations";
import { selectSelectedCar } from "../../redux/catalog/selectors";

import BookingForm from "../BookingForm/BookingForm";

import s from './CarDetails.module.css';


const CarDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const car = useSelector(selectSelectedCar);
    const formattedMileage = Number(car?.mileage).toLocaleString('uk-UA');
    const address = car?.address.split(',').slice(1).join(',');

    useEffect(() => {
        dispatch(fetchCarByIdThunk(id));
    }, [dispatch, id]);
    
    if (!car) return <p>Loading...</p> // starnge thing might delete

    return (
        <>
            <div className={s.carDetailsContainer}>
                <div className={s.imgFormContainer}>
                    <img className={s.image} src={car.img} alt={car.brand} />
                    <BookingForm /> 
                </div>
                <div className={s.infoContainer}>
                    <h3 className={s.mainTitle}>{car.brand} {car.model}, {car.year}</h3>
                    <div className={s.addressContainer}>
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <use href="/sprite.svg#location"></use>
                        </svg>
                        <p className={s.address}>{address}</p>
                        <p className={s.address}>Mileage: {formattedMileage}</p>
                    </div>
                    <p className={s.rentalPrice}>${car.rentalPrice}</p>
                    <p className={s.description}>{car.description}</p>
                    <div>
                        <h4 className={s.rentalConditionsTitle}>Rental Conditions:</h4>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.rentalConditions[0]}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.rentalConditions[1]}
                            </li >
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.rentalConditions[2]}
                            </li>
                        </ul>
                    </div>
                    <div className={s.carSpecificationsContainer}>
                        <h4 className={s.carSpecificationsTitle}>Car Specifications:</h4>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#year"></use>
                                </svg>
                                Year: {car.year}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#type"></use>
                                </svg>
                                Type: {car.type}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#fuel"></use>
                                </svg>
                                Fuel Consumption: {car.fuelConsumption}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#engine"></use>
                                </svg>
                                Engine Size: {car.engineSize}
                            </li>
                        </ul>
                    </div>
                    <div className={s.accessoriesContainer}>
                        <h4 className={s.accessoriesTitle}>Accessories and functionalities:</h4>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.functionalities[0]}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.functionalities[1]}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.functionalities[2]}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.accessories[0]}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.accessories[1]}
                            </li>
                            <li className={s.item}>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <use href="/sprite.svg#checkDetails"></use>
                                </svg>
                                {car.accessories[2]}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarDetails;