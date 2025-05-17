import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk, fetchCarByIdThunk } from "./operations";
import { fetchFilteredCarsThunk } from "../filters/operations";

const initialState = {
    items: {
      cars: [],
      totalCars: 0,
      page: 1,
      totalPages: 1,
    },
    selectedCar: null,
    isLoading: false,
    error: null
  };

const statusRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}
const statusPending = (state) => {
    state.isLoading = true;
    state.error = null;
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        clearSelectedCar: (state) => {
            state.selectedCar = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarsThunk.pending, statusPending)
            .addCase(fetchCarsThunk.rejected, statusRejected)
            .addCase(fetchCarsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchCarByIdThunk.pending, statusPending)
            .addCase(fetchCarByIdThunk.rejected, statusRejected)
            .addCase(fetchCarByIdThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedCar = action.payload;
            })
            .addCase(fetchFilteredCarsThunk.pending, statusPending)
            .addCase(fetchFilteredCarsThunk.rejected, statusRejected)
            .addCase(fetchFilteredCarsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
            });
    }
})

export const carsReducer = carsSlice.reducer;