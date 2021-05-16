import api from './api';

export default {
  deposit: async (value, password) => {
    try {
      const response = await api.patch('/api/v1/current-accounts/deposit', {
        value,
        password
      });

      return response;
    } catch(error){
      return error.response;
    }
  },
  withdraw: async (value, password) => {
    try {
      const response = await api.patch('/api/v1/current-accounts/withdraw', {
        value,
        password
      });

      return response;
    } catch(error){
      return error.response;
    }
  },
  transactions: async () => {
    try {
      const response = await api.get('/api/v1/current-accounts/transactions');
      return response;
    } catch(error){
      return error.response;
    }
  }
}

