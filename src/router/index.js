import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/apod',
		name: 'APOD',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/APOD.vue')
	},
	{
		path: '/calculator',
		name: 'Calculator',
		component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue')
	},
	{
		path: '/privacy-policy',
		name: 'Privacy Policy',
		component: () => import(/* webpackChunkName: "calculator" */ '../views/Privacy-Policy.vue')
	},
	{
		path: '/spacex',
		name: 'SpaceX',
		component: () => import(/* webpackChunkName: "SpaceX" */ '../views/SpaceX.vue')
	},
	{
		path: '/astra',
		name: 'Astra',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Astra.vue')
	},
	{
		path: '/blue-origin',
		name: 'Blue Origin',
		component: () => import(/* webpackChunkName: "SpaceX" */ '../views/Blue-Origin.vue')
	},
	{
		path: '/firefly-aerospace',
		name: 'Firefly Aerospace',
		component: () => import(/* webpackChunkName: "SpaceX" */ '../views/Firefly-Aerospace.vue')
	},
	{
		path: '/virgin-galactic',
		name: 'Virgin Galactic',
		component: () => import(/* webpackChunkName: "SpaceX" */ '../views/Virgin-Galactic.vue')
	},
	{
		path: '/united-launch-alliance',
		name: 'United Launch Alliance',
		component: () => import(/* webpackChunkName: "SpaceX" */ '../views/United-Launch-Alliance.vue')
	},
	{
		path: '/rocket-lab',
		name: 'Rocket Lab',
		component: () => import(/* webpackChunkName: "Rocket-Lab" */ '../views/Rocket-Lab.vue')
	},
	{
		path: '/solar-system',
		name: 'Solar System',
		component: () => import(/* webpackChunkName: "Solar System" */ '../views/Solar-System.vue')
	},
	{
		path: '/astronaut',
		name: 'Astronaut',
		component: () => import(/* webpackChunkName: "Test" */ '../views/Astronaut.vue')
	},
	{
		path: '/vehicles',
		name: 'Vehicles',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Vehicles.vue')
	},
	{
		path: '/test',
		name: 'Test',
		component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue')
	},
	{
		path: '/*',
		name: 'Catch All',
		component: Home
	}
];

const router = new VueRouter({
	routes, mode: 'history'
});

export default router;
