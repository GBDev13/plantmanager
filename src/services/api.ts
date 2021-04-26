import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.19.66.60:3333/',
})

export default api;