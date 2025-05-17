import CarCard from "../CarCard/CarCard";
import s from './CarList.module.css';

function CarList({ cars, listRef }) {
  return (
    <ul className={s.container} ref={listRef}>
      {cars?.map((item) => (
        <CarCard key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default CarList;