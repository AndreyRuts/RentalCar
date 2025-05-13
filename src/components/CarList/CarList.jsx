import { useSelector } from "react-redux";

import { selectAllCars } from "../../redux/catalog/selectors";

import CarCard from "../CarCard/CarCard";
import s from './CarList.module.css';

function CarList() {
    const cars = useSelector(selectAllCars);

    return (
        <>
            <ul className={s.container}>
                {cars.cars?.map(item => (<CarCard key={item.id} {...item} />))}
            </ul>
        </>
    )
}
  
export default CarList