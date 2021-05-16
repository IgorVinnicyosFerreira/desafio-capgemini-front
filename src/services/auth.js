import api from './api';

export default {
  login: async (agencie, account, verificationDigit, password ) => {
    try {
      await api.get('/sanctum/csrf-cookie');
      return await api.post('/api/v1/login', {
        agencies_number: agencie,
        number: account,
        verification_digit: verificationDigit,
        password: password
      });
    } catch(error){
      return error.response;
    }
  },
  async logout(){
    try {
      return await api.post('/api/v1/logout');
    } catch(error){
      return error.response;
    }
  }
}