<template>
  <div class="d-flex align-items-end flex-column mb-3" v-if="alertShow">
    <div
      class="alert position-absolute bottom-0 end-0 me-3"
      :class="alertType"
      role="alert"
    ><i class="bi bi-x-lg me-2" @click="closeAlert()"></i>{{ alertText }}</div>
    
  </div>
</template>

<script>
export default {
  props: ["alertType", "alertText"],
  data() {
    return {
      alertShow: true
    };
  },
  methods: {
    closeAlert() {
      this.alertShow = false;
    }
  }
};
</script>

<style>
</style>