import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gamezone-env.eba-nm6433md.us-east-1.elasticbeanstalk.com/'
});

export default api;