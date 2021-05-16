import { mapGetters } from "vuex";

export default {
  name: 'saldo',
  computed: {
    ...mapGetters(['formattedBalance'])
  }
}