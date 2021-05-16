export default {
  formattedBalance: state => {
    return Number(state.account.balance).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}