<template>
  <div>
    <h5>Create Post:</h5>
    <div class="ms-3">
      <div class="mb-3 col-5">
        <label for="exampleFormControlInput1" class="form-label">title:</label>
        <p v-if="titleNullShow" style="color:red">this field can not be empty</p>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="enter title"
          v-model="post.title"
        />
      </div>
      <div class="mb-3 col-5">
        <label for="exampleFormControlTextarea1" class="form-label">body:</label>
        <p v-if="bodyNullShow" style="color:red">this field can not be empty</p>
        <textarea
          v-model="post.body"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <button type="button" class="btn btn-dark" @click="postPostdata()">
        <div class="spinner-border spinner-border-sm me-2" role="status" v-if="isLoading">
          <span class="visually-hidden">Loading...</span>
        </div>Create
      </button>
    </div>
    <AlertView v-if="alertView" :alertType="alertType" :alertText="alertText"></AlertView>
  </div>
</template>

<script>
import axios from "axios";
import AlertView from "@/components/AlertView.vue";
export default {
  components: { AlertView },
  data() {
    return {
      post: {
        title: "",
        body: ""
      },
      isLoading: false,
      alertView: false,
      alertType: "",
      alertText: "",
      titleNullShow: false,
      bodyNullShow: false,
      validateInputs: true
    };
  },
  methods: {
    postPostdata() {
      this.isLoading = true;
      this.validation();
      if (this.validateInputs) {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", this.post)
          .then(() => {
            this.isLoading = false;
            this.post.body="";
            this.post.title="";
            this.alertType = "alert-success";
            this.alertText = "successful";
            this.showAlert();
          })
          .catch(error => {
            console.log(error);
            this.isLoading = false;
            this.alertType = "alert-danger";
            this.alertText = "error";
            this.showAlert();
          });
      } else {
        this.isLoading = false;
      }
    },
    showAlert() {
      this.alertView = true;
      setTimeout(() => {
        this.alertView = false;
      }, 3000);
    },
    validation() {
      if (this.post.title === "" && this.post.body !== "") {
        this.titleNullShow = true;
        this.bodyNullShow = false;
        this.validateInputs = false;
      } else if (this.post.body === "" && this.post.title !== "") {
        this.titleNullShow = false;
        this.bodyNullShow = true;
        this.validateInputs = false;
      } else if (this.post.body === "" && this.post.title === "") {
        this.titleNullShow = true;
        this.bodyNullShow = true;
        this.validateInputs = false;
      } else{
        this.titleNullShow = false;
        this.bodyNullShow = false;
        this.validateInputs = true;
      }
    }
  }
};
</script>

<style>
</style>