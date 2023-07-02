<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <router-link :to="{name:'showuser', params: { id: user.id } }" v-if="!idExist">{{user.name}}</router-link>
        <li v-else class="list-group-item">{{ user.name }}</li>
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
import { useRoute } from "vue-router";
export default {
  props: { user: Object },
  data() {
    return {
      idExist: false
    };
  },
  mounted() {
    this.changeIdStatus();
  },
  methods: {
    changeIdStatus() {
      if (useRoute().params.id !== undefined) {
        this.idExist = true;
      }
    }
  }
};
</script>

<style>
</style>