<template>
  <div>
    <h1>Users</h1>
    <div class="row g-3">
      <div v-if="loading" class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3">
        <UserCard :user="user" />
      </div>
    </div>
  </div>
</template>
  
<script>
import UserCard from "@/components/users/UserCard.vue";
import axios from "axios";
import { useRoute } from "vue-router";
// import { useRoute } from "vue-router";

export default {
  components: { UserCard },
  data() {
    return {
      user: {},
      loading: true,
      id: useRoute().params.id
      // id: useRoute.params.id
    };
  },
  mounted() {
    this.getusersData();
  },
  methods: {
    getusersData() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        .then(response => {
          // console.log(response);
          this.user = response.data;
          this.loading = false;
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>
  
  <style>
</style>