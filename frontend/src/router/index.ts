import { createRouter, createWebHistory } from "vue-router"
import Users from "../views/Users.vue";
import SavedUsers from "../views/SavedUsers.vue";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/users",
		name: "Users",
		component: Users,
	},
	{
		path: "/saved-users",
		name: "SavedUsers",
		component: SavedUsers,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
