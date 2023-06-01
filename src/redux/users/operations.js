import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, updUserById } from '../../api/mockApi/mockApi';

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

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async({id, newData}, thunkApi) => {
    try {
      const responce = await updUserById(id, newData);
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);