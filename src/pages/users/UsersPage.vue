<template>
  <div>
    <h1 class="d-inline">Users</h1>
    <button
      @click="goUsersPage()"
      type="button"
      class="btn btn-dark float-end me-4 mt-2"
      v-if="idExist"
    >back</button>
    <hr />
    <div class="row g-3" v-if="!idExist">
      <loadingView v-if="loading"></loadingView>
      <div v-else class="col-md-3" v-for="user in users" :key="user.id">
        <UserCard :user="user" />
      </div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/users/UserCard.vue";
import LoadingView from "@/components/LoadingView.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import router from "../../router";

export default {
  components: { UserCard, LoadingView },
  data() {
    return {
      users: [],
      loading: true
    };
  },
  mounted() {
    this.getusersData();
  },
  computed: {
    idExist() {
      if (useRoute().params.id !== undefined) {
        return true;
      }
      return false;
    }
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
    goUsersPage() {
      router.push({ name: "userspage" });
    }
  }
};
</script>