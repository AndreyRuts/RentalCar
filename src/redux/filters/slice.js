import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brand: '',
    rentalPrice: '',
    mileageFrom: '',
    mileageTo: '',
    brandList: [],
    rentalPriceList: []
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setBrand(state, action) {
            state.brand = action.payload;
        },
        setRentalPrice(state, action) {
            state.rentalPrice = action.payload;
        },
        setMileageFrom(state, action) {
            state.mileageFrom = action.payload;
        },
        setMileageTo(state, action) {
            state.mileageTo = action.payload;
        },
        resetFilters() {
            return initialState;
        },
        setBrandList(state, action) {
            state.brandList = action.payload;
        },
        setRentalPriceList(state, action) {
            state.rentalPriceList = action.payload;
        }
    }
});

export const {
    setBrand,
    setRentalPrice,
    setMileageTo,
    setMileageFrom,
    resetFilters,
    setBrandList,
    setRentalPriceList
} = filtersSlice.actions;

export default filtersSlice.reducer;