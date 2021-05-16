import axios from 'axios';
import router from '@/router';
import store from '@/store';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {

    const {
      response: { status }
    } = error;

    if (status === 401 && router.currentRoute.name !== 'login') {
      await store.commit('SET_AUTHENTICATED', false);
      router.push({ name: 'login' });
    }

    return Promise.reject(error);
  }
);

export default api;