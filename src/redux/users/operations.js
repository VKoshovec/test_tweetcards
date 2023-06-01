import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from '../../api/mockApi/mockApi';

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, thunkApi) => {
    try {
        const responce = await getAllUsers();
        return responce.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
  }
);