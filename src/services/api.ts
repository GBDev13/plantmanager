import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.19.74.78:3333/',
})

export default api;