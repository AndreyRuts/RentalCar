import { useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard";
import Loader from "../Loader/Loader";
import { selectIsLoading } from "../../redux/catalog/selectors";

import s from './CarList.module.css';

function CarList({ cars, listRef }) {
  const isLoading = useSelector(selectIsLoading);
  if (isLoading) {
    return <Loader loading={true}/>
  };

  return (
    <ul className={s.container} ref={listRef}>
      {cars?.map((item) => (
        <CarCard key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default CarList;