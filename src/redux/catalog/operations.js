import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarsThunk = createAsyncThunk('cars/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('https://car-rental-api.goit.global/cars');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchCarByIdThunk = createAsyncThunk('cars/fetchById',
    async (carId, thunkAPI) => {
        try {
            const { data } = await axios.get(`https://car-rental-api.goit.global/cars/${carId}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)