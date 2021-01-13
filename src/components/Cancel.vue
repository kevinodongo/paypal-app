<template>
  <!-- Cancel Component-->
  <div class="cancel-subscription">
    <v-btn
      :loading="saving"
      color="red darken-1"
      dark
      tile
      block
      @click="cancelsubscription"
      class="pl-5 pr-5"
    >
      <span style="text-transform: capitalize">Cancel</span>
    </v-btn>
  </div>
</template>

<script>
import { cancelusersubscription } from "./script";
export default {
  name: "Cancel",
  data() {
    return {
      saving: false
    };
  },
  methods: {
    // cancel subscription
    async cancelsubscription() {
      this.saving = true;
      let subscription_id = ""; //  user subscription id
      await cancelusersubscription(subscription_id);
      setTimeout(() => {
        this.saving = false;
      }, 1000);
      // end
    }
  }
};
</script>
