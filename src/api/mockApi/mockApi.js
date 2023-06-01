import axios from "axios";

const baseUrl = "https://64789f21362560649a2e2597.mockapi.io/";

export const getAllUsers = () => axios.get(`${ baseUrl }users`);

console.log(getAllUsers);