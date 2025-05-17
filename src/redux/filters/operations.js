import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilteredCarsThunk = createAsyncThunk(
  "filters/fetchFilteredCars",
  async (filters, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      if (filters.brand) params.append("brand", filters.brand);
      if (filters.rentalPrice) params.append("rentalPrice", filters.rentalPrice);
      if (filters.mileageFrom) params.append("mileage_gte", filters.mileageFrom);
      if (filters.mileageTo) params.append("mileage_lte", filters.mileageTo);

      const response = await axios.get(`https://car-rental-api.goit.global/cars?${params.toString()}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);