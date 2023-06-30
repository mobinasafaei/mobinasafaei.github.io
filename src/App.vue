<template>
  <div>
    <div id="navbar">
      <div style="padding-top:15px; padding-left:20px; padding-bottom:5px;">
        <p id="web-icon">WebProg.ir</p>
        <router-link :to="{name:'HomePage'}" class="router-link" style="margin-left:30px">Home</router-link>
        <router-link :to="{name:'UsersPage'}" class="router-link">Users</router-link>
      </div>
    </div>
    <router-view style="margin-left:30px; margin-top:5px;"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
.router-link {
  color: grey;
  text-decoration-line: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 15px;
  font-weight: thin;
  margin-right: 10px;
  display: inline-block;
}
.router-link-active {
  color: black;
  /* text-decoration: underline black 2px;
  text-underline-offset: 2px; */
  border-bottom: black solid 2px;
  padding-bottom: 2px;
}
#web-icon {
  display: inline-block;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
}
#navbar {
  background-color: #f7f7f7;
  height: 50px;
}
* {
  margin: 0px;
  padding: 0px;
}
</style>