import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brands: [],
    rentalPrices: []
};

const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        setBrands(state, action) {
            state.brands = action.payload;
        },
        setRentalPrices(state, action) {
            state.rentalPrices = action.payload;
        }
    }
});

export const { setBrands, setRentalPrices } = optionsSlice.actions;

export default optionsSlice.reducer;