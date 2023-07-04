<template>
  <div>
    <div class="card">
      <h5 class="card-header" v-if="postIdExist">{{ post.title }}</h5>
      <router-link
        class="card-header"
        :to="{name:'showpost', params:{id:post.id}}"
        v-if="!postIdExist"
      >{{ post.title }}</router-link>
      <div class="card-body">
        <p class="card-text">{{ post.body }}</p>
      </div>
      <div v-if="postIdExist" class="card-footer">
        <button type="button" class="btn btn-danger me-2">Delete</button>
        <button type="button" class="btn btn-dark">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  props: { post: Object },
  computed: {
    postIdExist() {
      if (useRoute().params.id !== undefined) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style>
</style>