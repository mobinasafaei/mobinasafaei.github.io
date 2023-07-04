<template>
  <div>
    <div class="row g-3">
      <loadingView v-if="loading"></loadingView>
      <div v-else class="col-md-6">
        <PostCard :post="post" class="ps-2"></PostCard>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
import LoadingView from "@/components/LoadingView.vue";
import PostCard from "@/components/posts/PostCard.vue";
import { useRoute } from "vue-router";
export default {
  components: { LoadingView, PostCard },
  data() {
    return {
      post: {},
      loading: true,
      id: useRoute().params.id
    };
  },
  mounted() {
    this.getPostsData();
  },
  methods: {
    getPostsData() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          this.post = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
  
  <style>
</style>