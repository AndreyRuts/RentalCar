import { fetchCarsThunk } from './operations';
import { setBrandList, setRentalPriceList } from '../filters/slice';

export const fetchCarsAndUpdateFilters = () => async (dispatch) => {
  const resultAction = await dispatch(fetchCarsThunk());

  if (fetchCarsThunk.fulfilled.match(resultAction)) {
    const cars = resultAction.payload.cars || [];

    const brandList = [...new Set(cars.map(car => car.brand))].sort();

    const rentalPriceList = [...new Set(cars.map(car => car.rentalPrice))].sort((a, b) => a - b);

    dispatch(setBrandList(brandList));
    dispatch(setRentalPriceList(rentalPriceList));
  }
};