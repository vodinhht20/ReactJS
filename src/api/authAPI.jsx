// import axios from 'axios';
// const instance = axios.create({
//   baseURL: "http://localhost:4000"
// });
import instance from "./instance";


export const signup = (user) => {
  const url = "/signup";
  return instance.post(url, user);
};
export const signin = (user) => {
  const url = "/signin";
  return instance.post(url, user);
};

