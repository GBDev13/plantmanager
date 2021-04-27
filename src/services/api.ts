import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/gbdev13/plantmanager/',
})

export default api;