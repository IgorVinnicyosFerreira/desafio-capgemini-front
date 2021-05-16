import { mapState } from "vuex";

export default {
  name: 'account-data',
  computed: {
    ...mapState(['account']),
  }
}