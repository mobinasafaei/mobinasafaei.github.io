<template>
  <div>
    <div class="card">
      <h5 class="card-header" v-if="postIdExist">{{ post.title }}</h5>
      <router-link
        class="card-header"
        :to="{name:'showpost', params:{id:post.id}}"
        v-if="!postIdExist"
        style="color:blue"
      >{{ post.title }}</router-link>
      <div class="card-body">
        <p class="card-text">{{ post.body }}</p>
      </div>
      <div v-if="postIdExist" class="card-footer">
        <button type="button" class="btn btn-danger me-2" @click="deletePost()">Delete</button>
        <button type="button" class="btn btn-dark" @click="goEditPage()">Edit</button>
      </div>
    </div>
    <AlertView v-if="alertView" :alertType="alertType" :alertText="alertText"></AlertView>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";
import AlertView from "../AlertView.vue";
import router from '../../router';

export default {
  data() {
    return {
      alertView: false,
      alertType: "",
      alertText: ""
    };
  },
  props: { post: Object },
  components: { AlertView },
  computed: {
    postIdExist() {
      if (useRoute().params.id !== undefined) {
        return true;
      }
      return false;
    }
  },
  methods: {
    deletePost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${this.post.id}`)
        .then(response => {
          console.log(response);
          this.alertText="deleted succsessfuly";
          this.alertType="alert-success";
          this.showAlert();
        })
        .catch(error => {
          console.log(error);
        });
    },
    showAlert() {
      this.alertView = true;
      setTimeout(() => {
        this.alertView = false;
      }, 3000);
    },
    goEditPage(){
      router.push({name:"editpage"})
    }
  }
};
</script>

<style>
</style>