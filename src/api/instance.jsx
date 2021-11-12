import axios from 'axios';

const instance = axios.create({
  baseURL: "https://w4nog.sse.codesandbox.io"
});
export default instance;
