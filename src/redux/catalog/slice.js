import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarsThunk.pending, statusPending)
            .addCase(fetchCarsThunk.rejected, statusRejected)
            .addCase(fetchCarsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
            })
    }
})

export const carsReducer = carsSlice.reducer;