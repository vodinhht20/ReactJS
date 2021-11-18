import axios from 'axios';
const instance = axios.create({
  baseURL: "http://localhost:4000"
});

export const signup = (user) => {
  const url = "/signup";
  return instance.post(url, user);
};
export const signin = (user) => {
  const url = "/signin";
  return instance.post(url, user);
};

