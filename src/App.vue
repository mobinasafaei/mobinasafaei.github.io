<template>
  <div>
    <HeaderView />
    <router-view style="margin-left:30px; margin-top:5px;"></router-view>
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
export default {
  name: "App",
  components: { HeaderView }
};
</script>

<style>
body {
  overflow-x: hidden;
}
</style>