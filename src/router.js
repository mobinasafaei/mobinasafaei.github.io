import { createRouter, createWebHistory } from "vue-router"
import HomePage from "./pages/HomePage.vue"
import UsersPage from "./pages/users/UsersPage.vue"
import ShowUser from "./pages/users/ShowUser.vue"
import PostsPage from "./pages/PostsPage.vue"
import NotFound from "./pages/NotFound.vue"

const routes = [
    { path: '/', name: "homepage", component: HomePage },
    { path: '/users', name: "userspage", component: UsersPage },
    { path: '/users/:id', name: "showuser", component: ShowUser },
    { path: '/posts', name: "postspage", component: PostsPage },
    { path: '/:pathMatch(.*)*', name: "notfound", component: NotFound },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;