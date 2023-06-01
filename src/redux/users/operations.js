import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTotlaUsers, getAllUsers, updUserById } from '../../api/mockApi/mockApi';

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (params, thunkApi) => {
    try {
        const totalResponce = await getTotlaUsers();
        const responce = await getAllUsers(params);
        return {current: responce.data, total: totalResponce.data.length};
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