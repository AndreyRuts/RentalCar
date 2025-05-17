import axios from "axios";
import { setBrandList, setRentalPriceList } from "../filters/slice";

export const fetchCarsAndUpdateFilters = () => async (dispatch) => {
  try {
    const { data } = await axios.get('https://car-rental-api.goit.global/cars');
    const cars = data.cars || [];

    const brandList = [...new Set(cars.map(car => car.brand))].sort();
    const rentalPriceList = [...new Set(cars.map(car => car.rentalPrice))].sort((a, b) => a - b);

    dispatch(setBrandList(brandList));
    dispatch(setRentalPriceList(rentalPriceList));
  } catch (error) {
    console.error("Error loading filters:", error);
  }
};
