import authService from '../services/auth';
import currentAccountService from '../services/currentAccount';

export default {
  async login({ commit }, { agencie, account, password}){
    const accountSplit = account.split("-");

    const response = await authService
      .login(agencie, accountSplit[0], accountSplit[1], password);

    if(response.status === 200){
      commit('SET_ACCOUNT', response.data.account);
      commit('SET_AUTHENTICATED', true);
    }

    return response;
  },
  async logout({ commit }){
    await authService.logout();
    commit('SET_AUTHENTICATED', false);
  },
  async deposit({ commit }, { value, password }){
    const response = await currentAccountService.deposit(value, password);
    
    if(response.status === 200){
      commit('SET_BALANCE', response.data.balance);
    }

    return response;
  },
  async withdraw({ commit }, { value, password }){
    const response = await currentAccountService.withdraw(value, password);
    
    if(response.status === 200){
      commit('SET_BALANCE', response.data.balance);
    }

    return response;
  }
}