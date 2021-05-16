import { mapActions } from "vuex"

export default {
  name: 'login',
  data(){
    return {
      formValid: true,
      agencie: '',
      account: '',
      password: '',
      errors: [],
      loading: false,
    }
  },
  computed: {
    hasErrors(){
      return this.errors.length > 0;
    }
  },
  methods: {
    ...mapActions(['login']),
    async onSubmit(){
      this.$refs.formLogin.validate();
      if(!this.formValid) return;

      this.loading = true;
      this.errors = [];

      const response = await this.login({ 
        agencie: this.agencie, 
        account: this.account, 
        password: this.password
      });

      this.loading = false;

      if(response.status === 200){
        this.$router.push({name: 'home'});
      }

      if(response.status === 401){
        this.errors.push(response.data.msg);
      }

      if(response.status === 422) {
        Object.keys(response.data.errors).forEach(errorKey => {
          this.errors = [
            ...this.errors,
            ...response.data.errors[errorKey]
          ]
        });
      }
    }
  }
}