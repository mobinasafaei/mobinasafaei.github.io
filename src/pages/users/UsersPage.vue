<template>
  <div>
    <h1>Users</h1>
    <div class="row g-3" v-if="!idExist">
      <div v-if="loading" class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3" v-for="user in users" :key="user.id">
        <UserCard :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/users/UserCard.vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  components: { UserCard },
  data() {
    return {
      users: [],
      loading: true,
      idExist: false
    };
  },
  mounted() {
    this.getusersData();
    this.changeIdStatus();
  },
  methods: {
    getusersData() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          this.users = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    changeIdStatus() {
      if (useRoute().params.id !== undefined) {
        this.idExist = true;
      }
    }
  }
};
</script>