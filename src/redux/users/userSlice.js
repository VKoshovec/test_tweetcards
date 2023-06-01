import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, fetchUserById } from "./operations";

const usersSlise = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
        .addCase(fetchAllUsers.pending, (state, { payload }) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
            state.users = payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchAllUsers.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(fetchUserById.pending, (state, { payload}) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchUserById.fulfilled, (state, { payload }) => {
            state.users = { ...state.users, ...payload }
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchUserById, (state, { payload })=> {
            state.isLoading = false;
            state.error = payload;
        })
    },
});

export const usersReduser = usersSlise.reducer;