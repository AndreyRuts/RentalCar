import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBox from "../../components/SearchBox/SearchBox";
import CarList from "../../components/CarList/CarList";
import { fetchCarsAndUpdateFilters } from "../../redux/catalog/extraOperations";
import { fetchCarsThunk } from "../../redux/catalog/operations";
import { selectAllCars, selectPage, selectTotalPages } from "../../redux/catalog/selectors";

import s from './CatalogPage.module.css';

function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.items.cars);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const carListRef = useRef(null);
  const prevLengthRef = useRef(0);

  useEffect(() => {
    dispatch(fetchCarsAndUpdateFilters());
    dispatch(fetchCarsThunk({ page: 1, limit: 12 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      prevLengthRef.current = cars.length;
      dispatch(fetchCarsThunk({ page: page + 1, limit: 12 }));
    }
  };

  useEffect(() => {
    if (carListRef.current && cars.length > prevLengthRef.current) {
      const newCard = carListRef.current.children[prevLengthRef.current];
      if (newCard) {
        newCard.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [cars]);

  return (
    <>
      <SearchBox />
      <CarList cars={cars} listRef={carListRef} />
      {page < totalPages && (
        <button className={s.loadMoreBtn} onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
}

export default CatalogPage;
