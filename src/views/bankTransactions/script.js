import currenteAccountService from '@/services/currentAccount';

export default {
  name: 'bank-transactions',
  data () {
    return {
      loading: false,
      transactions: [],
    }
  },
  beforeRouteEnter(to, from, next){
    next(async vm => {
      await vm.fetchTransactions()
    });
  },
  computed: {
    hasTransactions(){
      return this.transactions.length > 0;
    }
  },
  methods: { 
    async fetchTransactions(){
      this.loading = true;
      const response = await currenteAccountService.transactions();
      this.loading = false;

      if(response.status === 200){
        this.transactions = response.data.data;
      }
    },
    formatCurrency(value){
      return Number(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
    formatDate(date){
      const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
      let dateObject = new Date(date);
      let formattedDate = ((dateObject.getDate() + " " + months[(dateObject.getMonth())] + " " + dateObject.getFullYear()));
      
      return formattedDate;
    }
  }
}