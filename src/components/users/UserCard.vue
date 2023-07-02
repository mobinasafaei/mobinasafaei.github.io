<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <router-link :to="{name:'showuser', params: { id: user.id } }">{{user.name}}</router-link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ user.username }}</li>
        <li class="list-group-item">{{ user.email }}</li>
        <li class="list-group-item">{{ user.phone }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { useRoute } from "vue-router";
export default {
  props: { user: Object }
};
</script>

<style>
</style>