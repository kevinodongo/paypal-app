<template>
  <div class="activate">
    <v-btn
      :loading="saving"
      color="primary"
      dark
      block
      tile
      @click="activatesubscription"
      class="pl-5 pr-5 mb-2"
    >
      <span style="text-transform: capitalize">Activate</span>
    </v-btn>
  </div>
</template>

<script>
import { activateusersubscription } from "./script";
export default {
  name: "Activate",
  data() {
    return {
      saving: false
    };
  },
  methods: {
    // activate subscription
    async activatesubscription() {
      this.saving = true;
      let subscription_id = ""; //  user subscription id
      activateusersubscription(subscription_id);
      setTimeout(() => {
        this.saving = false;
      }, 1000);
      // end
    }
  }
};
</script>
