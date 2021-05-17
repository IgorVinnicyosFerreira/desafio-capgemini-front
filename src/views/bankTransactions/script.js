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
      let dateObject = new Date(date);
      return dateObject.toLocaleDateString('pt-br', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'}
      );
    }
  }
}