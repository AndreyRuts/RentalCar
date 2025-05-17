import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarsThunk = createAsyncThunk(
    'cars/fetchAll',
    async ({ page = 1, limit = 12 } = {}, thunkAPI) => {
      try {
        const { data } = await axios.get('https://car-rental-api.goit.global/cars', {
          params: { page, limit },
        });
        return { data, page };
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