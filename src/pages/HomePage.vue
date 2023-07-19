<template>
  <div>
    <h1>Home</h1>
    <hr class="w-100 me-2" />
    <p class="row-3 col-6">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
      Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <button type="button" class="btn btn-dark mx-2" @click="goToPosts()">Posts</button>
    <button type="button" class="btn btn-light" @click="goToUsers()">Users</button>
  </div>
</template>

<script>
import router from "../router";
export default {
  methods: {
    goToPosts() {
      router.push({ name: "postspage" });
    },
    goToUsers() {
      router.push({ name: "userspage" });
    }
  }
};
</script>

<style>
</style>