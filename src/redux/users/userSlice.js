import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, fetchUserById, fetchEmpty } from "./operations";

const usersSlise = createSlice({
    name: 'users',
    initialState: {
        users: [],
        totlaUsers: 0,
        isLoading: false,
        error: null,
        filtr: 'show all',
    },
    extraReducers: builder => {
        builder
        .addCase(fetchAllUsers.pending, (state, { payload }) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {

            if (state.filtr === payload.filter) {
                state.users.push(...payload.current);
                state.totlaUsers = payload.total;
            }

            if (state.filtr !== payload.filter) {
                state.users = [];
                state.filtr = payload.filter;
                state.users = payload.current;
                state.totlaUsers = payload.total;
            }

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

            const userIndex = state.users.findIndex(user => user.id === payload.id);
            state.users.splice(userIndex, 1, payload);
            
            state.isLoading = false;
            state.error = null;
        })
        .addCase(fetchUserById.rejected, (state, { payload })=> {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(fetchEmpty.fulfilled, (state, { payload })=> {
            state.isLoading = false;
            state.users = [];
            state.filtr = 'show all';
            state.totlaUsers = 0;
            state.error = null;
        })
    },
});

export const usersReduser = usersSlise.reducer;