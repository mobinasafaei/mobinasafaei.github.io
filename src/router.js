import { createRouter, createWebHistory } from "vue-router"
import HomePage from "./pages/HomePage.vue"
import UsersPage from "./pages/users/UsersPage.vue"
import ShowUser from "./pages/users/ShowUser.vue"
import PostsPage from "./pages/posts/PostsPage.vue"
import NotFound from "./pages/NotFound.vue"
import ShowPost from "./pages/posts/ShowPost.vue"

const routes = [
    { path: '/', name: "homepage", component: HomePage },
    {
        path: '/users', name: "userspage", component: UsersPage, children: [
            { path: '/users/:id', name: "showuser", component: ShowUser },
        ]
    },

    {
        path: '/posts', name: "postspage", component: PostsPage, children: [
            { path: '/posts/:id', name: "showpost", component: ShowPost }
        ]
    },
    { path: '/:pathMatch(.*)*', name: "notfound", component: NotFound },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;