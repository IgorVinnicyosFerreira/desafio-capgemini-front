import { VMoney } from 'v-money'
import { mapActions } from 'vuex';

export default {
  name: 'saque',
  data(){
    return {
      success: false,
      loading: false,
      formValid: true,
      value: "",
      password: "",
      configMask: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
      },
      errors: []
    }
  },
  directives: { money: VMoney },
  computed: {
    hasErrors(){
      return this.errors.length > 0;
    }
  },
  methods: {
    ...mapActions(['withdraw']),
    formatMoneyToApi(){
      if(!this.value) return 0;
      let value = this.value.split('.').join('');
      value= value.split(',').join('.');
     
      return Number(value.replace(/[^0-9.]/g, ""));
    },
    async onSubmit(){
      this.$refs.formWithdraw.validate();
      if(!this.formValid) return;

      this.errors = [];
      this.loading = true;
      const value = this.formatMoneyToApi();
      const response = await this.withdraw({ value, password: this.password});
      this.loading = false;

      if(response.status === 200){
        this.success = true;
        this.value = "";
        this.$refs.formWithdraw.reset();
      }

      if(response.status === 400){
        this.errors.push(response.data.error);
      }

      if(response.status === 422) {
        Object.keys(response.data.errors).forEach(errorKey => {
          this.errors = [
            ...this.errors,
            ...response.data.errors[errorKey]
          ]
        });
      }
    },
  }
}