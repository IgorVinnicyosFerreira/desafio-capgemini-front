import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data: () => ({
    //"Dashboard", "Messages", "Profile", "Updates"
    links: [
      {
        name: 'Saldo',
        path: '/home',
      },
      {
        name: 'Depósito',
        path: '/deposito',
      },
      {
        name: 'Saque',
        path: '/saque',
      },
      {
        name: 'Dados da Conta',
        path: '/dados-da-conta',
      },
      {
        name: 'Histórico de transações',
        path: '/historico-transacoes',
      }
    ],
  }),
  computed: {
    ...mapState(['account']),
    ...mapGetters(['formattedBalance']),
    getVisiblesLink(){
      return this.links.filter(link => {
        if(link.path === '/dados-da-conta' && !this.$vuetify.breakpoint.xsOnly){
          return false;
        }

        return true;
      });
    },
  },
  methods: {
    ...mapActions(['logout']),
    async onLogout(){
      await this.logout();
      this.$router.push({ name: 'login' });
    }
  }
};