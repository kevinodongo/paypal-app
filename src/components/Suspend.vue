<template>
  <!-- Suspend Component-->
  <div class="suspend-subscription">
    <v-btn
      :loading="saving"
      color="warning"
      dark
      tile
      block
      @click="suspendsubscription"
      class="pl-5 pr-5"
    >
      <span style="text-transform: capitalize">suspend</span>
    </v-btn>
  </div>
</template>

<script>
import { suspendusersubscription } from "./script";
export default {
  name: "Suspend",
  data() {
    return {
      saving: false
    };
  },
  methods: {
    // suspend subscription
    async suspendsubscription() {
      this.saving = true;
      let subscription_id = ""; //  user subscription id
      await suspendusersubscription(subscription_id);
      setTimeout(() => {
        this.saving = false;
      }, 1000);
      // end
    }
  }
};
</script>
