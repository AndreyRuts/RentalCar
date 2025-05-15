import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFilteredCarsThunk = createAsyncThunk(
  'filters/fetchCars',
  async (filters = {}, thunkAPI) => {
    try {
      const response = await axios.get('https://car-rental-api.goit.global/api/cars', {
        params: filters,
      });
      return { cars: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
