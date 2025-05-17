import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchFilteredCarsThunk = createAsyncThunk(
  "filters/fetchFilteredCars",
  async (filters, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      if (filters.brand) params.append("brand", filters.brand);

      const price = Number(filters.rentalPrice);
      
      if (!isNaN(price) && price > 0) {
        params.append("rentalPrice", price);
      }

      const mileageFrom = Number(filters.mileageFrom);
      if (!isNaN(mileageFrom) && mileageFrom >= 0) {
        params.append("minMileage", mileageFrom);
      }

      const mileageTo = Number(filters.mileageTo);
      if (!isNaN(mileageTo) && mileageTo > 0) {
        params.append("maxMileage", mileageTo);
      }

      const response = await axios.get(
        `https://car-rental-api.goit.global/cars?${params.toString()}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);