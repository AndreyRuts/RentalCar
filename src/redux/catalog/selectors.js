import { createSelector } from "@reduxjs/toolkit";

export const selectAllCars = (state) => state.cars.items;
export const selectSelectedCar = (state) => state.cars.selectedCar;
export const selectCars = state => state.cars.items.cars;
export const selectPage = state => state.cars.items.page;
export const selectTotalPages = state => state.cars.items.totalPages;
export const selectIsLoading = state => state.cars.isLoading;

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