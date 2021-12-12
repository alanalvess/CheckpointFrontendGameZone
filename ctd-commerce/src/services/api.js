import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gamezonestore.herokuapp.com/products'
});

export default api;