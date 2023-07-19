<template>
  <div class="d-flex align-items-end flex-column mb-3">
    <div class="alert position-absolute bottom-0 end-0 me-3" :class="alertType" role="alert">{{ alertText }}</div>
  </div>
</template>

<script>
export default {
 props:['alertType','alertText']
};
</script>

<style>

</style>