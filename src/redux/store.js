import { combineReducers ,configureStore } from "@reduxjs/toolkit";
import { usersReduser } from "./users/userSlice";

const rootReduser = combineReducers({
    users: usersReduser,
});

export const store = configureStore({
    reducer: rootReduser,
})

