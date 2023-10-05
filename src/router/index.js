import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta);

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
		path: '/accessibility-statement',
		name: 'Accessibility Statement',
		component: () => import(/* webpackChunkName: "calculator" */ '../views/Accessibility-Statement.vue')
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
		path: '/sierra-space',
		name: 'Sierra Space',
		component: () => import(/* webpackChunkName: "SpaceX" */ '../views/Sierra-Space.vue')
	},
	{
		path: '/astrobotic',
		name: 'Astrobotic',
		component: () => import(/* webpackChunkName: "about" */ '../views/Astrobotic.vue')
	},
	{
		path: '/astra',
		name: 'Astra',
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
		path: '/relativity-space',
		name: 'Relativity Space',
		component: () => import(/* webpackChunkName: "SpaceX" */ '../views/Relativity-Space.vue')
	},
	{
		path: '/rocket-lab',
		name: 'Rocket Lab',
		component: () => import(/* webpackChunkName: "Rocket-Lab" */ '../views/Rocket-Lab.vue')
	},
	{
		path: '/solar-system',
		name: 'SolarSystem',
		component: () => import(/* webpackChunkName: "Solar System" */ '../views/Solar-System.vue')
	},
	{
		path: '/astronaut',
		name: 'Astronaut',
		component: () => import(/* webpackChunkName: "Test" */ '../views/Astronaut.vue')
	},
	{
		path: '/locations',
		name: 'Locations',
		component: () => import(/* webpackChunkName: "Test" */ '../views/Locations.vue')
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
		path: '/perseverance',
		name: 'Perseverance',
		component: () => import(/* webpackChunkName: "about" */ '../views/Perseverance.vue')
	},
	{
		path: '/curiosity',
		name: 'Curiosity',
		component: () => import(/* webpackChunkName: "about" */ '../views/Curiosity.vue')
	},
	{
		path: '/opportunity',
		name: 'Opportunity',
		component: () => import(/* webpackChunkName: "about" */ '../views/Opportunity.vue')
	},
	{
		path: '/spirit',
		name: 'Spirit',
		component: () => import(/* webpackChunkName: "about" */ '../views/Spirit.vue')
	},
	{
		path: '/sojourner',
		name: 'Sojourner',
		component: () => import(/* webpackChunkName: "about" */ '../views/Sojourner.vue')
	},
	{
		path: '/test',
		name: 'Test',
		component: () => import(/* webpackChunkName: "Test" */ '../views/Test.vue')
	},
	{
		path: '/error-404',
		name: 'ERROR-404',
		component: () => import(/* webpackChunkName: "Test" */ '../views/ERROR-404.vue')
	},
	{
		path: '/error-418',
		name: 'ERROR-418',
		component: () => import(/* webpackChunkName: "Test" */ '../views/ERROR-418.vue')
	},
	{
		path: '/locations/baikonur-cosmodrome',
		name: "Baikonur Cosmodrome",
		component: () => import(/* webpackChunkName: "Test" */'../views/locations/baikonur-cosmodrome.vue')
	},
	{
		path: '/locations/kennedy-space-center',
		name: "Kennedy Space Center",
		component: () => import(/* webpackChunkName: "Test" */'../views/locations/kennedy-space-center.vue')
	},
	{
		path: '/locations/starbase',
		name: "Starbase",
		component: () => import(/* webpackChunkName: "Test" */'../views/locations/starbase.vue')
	},
	{
		path: '/locations/wallops-island',
		name: "Wallops Island",
		component: () => import(/* webpackChunkName: "Test" */'../views/locations/wallops-island.vue')
	},
	{
		path: '/locations/vandenberg',
		name: "Vandenberg Space Force Base",
		component: () => import(/* webpackChunkName: "Test" */'../views/locations/vandenberg.vue')
	},
	{
		path: '/*',
		name: 'Catch All',
		component: () => import(/* webpackChunkName: "Test" */ '../views/ERROR-404.vue')
	}
];

const router = new VueRouter({
	routes, mode: 'history'
});

export default router;
