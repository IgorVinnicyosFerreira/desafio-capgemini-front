export default {
  SET_ACCOUNT(state, payload) {
    state.account = payload;
  },
  SET_AUTHENTICATED(state, payload) {
    state.authenticated = payload;
  },
  SET_BALANCE(state, payload) {
    state.account.balance = payload;
  }
}