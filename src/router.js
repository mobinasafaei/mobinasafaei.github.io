import { createRouter, createWebHistory } from "vue-router"
import HomePage from "./components/HomePage.vue"
import UsersPage from "./components/UsersPage.vue"
import PostsPage from "./components/PostsPage.vue"
import NotFound from "./components/NotFound.vue"

const routes = [
    { path: '/', name: "HomePage", component: HomePage },
    { path: '/users', name: "UsersPage", component: UsersPage },
    { path: '/posts', name: "PostsPage", component: PostsPage },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;