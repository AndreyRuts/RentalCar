import { createSelector } from "@reduxjs/toolkit";

export const selectAllCars = (state) => state.cars.items.cars;
export const selectSelectedCar = (state) => state.cars.selectedCar;

export const selectBrands = createSelector(
    [selectAllCars],
    (cars) => {
      if (!cars.length) return [];
      return [...new Set(cars.map(car => car.brand))].sort();
    }
);
  
export const selectRentalPrices = createSelector(
    [selectAllCars],
    (cars) => {
      if (!cars.length) return [];
      return [...new Set(cars.map(car => car.rentalPrice))].sort((a, b) => a - b);
    }
);