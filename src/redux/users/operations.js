import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTotlaUsers, getAllUsers, updUserById } from '../../api/mockApi/mockApi';

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async ({ page, filter }, thunkApi) => {
    try {
        const totalResponce = await getTotlaUsers({ filter });
        const responce = await getAllUsers({ page, filter });
        return { current: responce.data, total: totalResponce.data.length, filter };
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async({id, newData}, thunkApi) => {
    try {
      const responce = await updUserById({id, newData});
      
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchEmpty = createAsyncThunk(
  "users/Empty",
  async(_, thunkApi) => {
      return;
  }
);