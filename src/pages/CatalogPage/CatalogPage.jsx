import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

import CarList from "../../components/CarList/CarList"
import SearchBox from "../../components/SearchBox/SearchBox"

import { fetchCarsThunk } from "../../redux/catalog/operations";
import { selectAllCars } from "../../redux/catalog/selectors";
import { setBrandList, setRentalPriceList } from "../../redux/filters/slice";

function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch])

  useEffect(() => {
    if (cars?.cars?.length > 0) {
      const uniqueBrands = [...new Set(cars.cars.map(car => car.brand))].sort();
      const uniquePrices = [...new Set(cars.cars.map(car => car.rentalPrice))].sort();
      dispatch(setBrandList(uniqueBrands));
      dispatch(setRentalPriceList(uniquePrices));
    }
  }, [cars, dispatch]);

  return (   
    <>
      <SearchBox/>
      <CarList/>
    </>
    )
  }
  
export default CatalogPage