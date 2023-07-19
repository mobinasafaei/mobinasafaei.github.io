<template>
  <div>
    <h1 class="d-inline">Posts</h1>
    <button
      @click="goPostsPage()"
      type="button"
      class="btn btn-dark float-end me-4 mt-2"
      v-if="idExist && !routePathEqualsEdit"
    >back</button>
    <hr class="w-100 me-2" />

    <div v-if="!idExist && !routePathEqualsCreate">
      <router-link :to="{name:'createpost'}" class="btn btn-dark mb-3">New Post</router-link>
      <div class="row g-3">
        <loadingView v-if="loading"></loadingView>
        <div class="col-md-6" v-for="post in posts" :key="post.id">
          <PostCard :post="post" class="ps-2"></PostCard>
        </div>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import axios from "axios";
import LoadingView from "@/components/LoadingView.vue";
import PostCard from "@/components/posts/PostCard.vue";
import { useRoute } from "vue-router";
import router from "../../router";

export default {
  components: { LoadingView, PostCard },
  data() {
    return {
      posts: [],
      loading: true
    };
  },
  mounted() {
    this.getPostsData();
  },
  computed: {
    idExist() {
      if (useRoute().params.id !== undefined) {
        return true;
      }
      return false;
    },
    routePathEqualsCreate() {
      if (this.$route.name== "createpost") {
        return true;
      }
      return false;
    },
    routePathEqualsEdit() {
      if (this.$route.name == "editpage") {
        return true;
      }
      return false;
    }
  },
  methods: {
    getPostsData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          this.posts = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    goPostsPage() {
      router.push({ name: "postspage" });
    }
  }
};
</script>

<style>
</style>