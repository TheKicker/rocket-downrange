import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'), // Switch to lazy-loading for consistency
    meta: { title: 'Rocket Downrange - Home' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'Rocket Downrange - About' },
  },
  {
    path: '/apod',
    name: 'APOD',
    component: () => import(/* webpackChunkName: "apod" */ '../views/APOD.vue'),
    meta: { title: 'Rocket Downrange - Astronomy Picture of the Day' },
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue'),
    meta: { title: 'Rocket Downrange - Calculator' },
  },
  {
    path: '/accessibility-statement',
    name: 'Accessibility Statement',
    component: () => import(/* webpackChunkName: "accessibility" */ '../views/Accessibility-Statement.vue'),
    meta: { title: 'Rocket Downrange - Accessibility Statement' },
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy-Policy.vue'),
    meta: { title: 'Rocket Downrange - Privacy Policy' },
  },
  {
    path: '/spacex',
    name: 'SpaceX',
    component: () => import(/* webpackChunkName: "spacex" */ '../views/SpaceX.vue'),
    meta: { title: 'Rocket Downrange - SpaceX' },
  },
  {
    path: '/sierra-space',
    name: 'Sierra Space',
    component: () => import(/* webpackChunkName: "sierra" */ '../views/Sierra-Space.vue'),
    meta: { title: 'Rocket Downrange - Sierra Space' },
  },
  {
    path: '/astrobotic',
    name: 'Astrobotic',
    component: () => import(/* webpackChunkName: "astrobotic" */ '../views/Astrobotic.vue'),
    meta: { title: 'Rocket Downrange - Astrobotic' },
  },
  {
    path: '/astra',
    name: 'Astra',
    component: () => import(/* webpackChunkName: "astra" */ '../views/Astra.vue'),
    meta: { title: 'Rocket Downrange - Astra' },
  },
  {
    path: '/blue-origin',
    name: 'Blue Origin',
    component: () => import(/* webpackChunkName: "blue-origin" */ '../views/Blue-Origin.vue'),
    meta: { title: 'Rocket Downrange - Blue Origin' },
  },
  {
    path: '/firefly-aerospace',
    name: 'Firefly Aerospace',
    component: () => import(/* webpackChunkName: "firefly" */ '../views/Firefly-Aerospace.vue'),
    meta: { title: 'Rocket Downrange - Firefly Aerospace' },
  },
  {
    path: '/virgin-galactic',
    name: 'Virgin Galactic',
    component: () => import(/* webpackChunkName: "virgin" */ '../views/Virgin-Galactic.vue'),
    meta: { title: 'Rocket Downrange - Virgin Galactic' },
  },
  {
    path: '/united-launch-alliance',
    name: 'United Launch Alliance',
    component: () => import(/* webpackChunkName: "ula" */ '../views/United-Launch-Alliance.vue'),
    meta: { title: 'Rocket Downrange - United Launch Alliance' },
  },
  {
    path: '/relativity-space',
    name: 'Relativity Space',
    component: () => import(/* webpackChunkName: "relativity" */ '../views/Relativity-Space.vue'),
    meta: { title: 'Rocket Downrange - Relativity Space' },
  },
  {
    path: '/rocket-lab',
    name: 'Rocket Lab',
    component: () => import(/* webpackChunkName: "rocket-lab" */ '../views/Rocket-Lab.vue'),
    meta: { title: 'Rocket Downrange - Rocket Lab' },
  },
  {
    path: '/solar-system',
    name: 'SolarSystem',
    component: () => import(/* webpackChunkName: "solar-system" */ '../views/Solar-System.vue'),
    meta: { title: 'Rocket Downrange - Solar System' },
  },
  {
    path: '/astronaut',
    name: 'Astronaut',
    component: () => import(/* webpackChunkName: "astronaut" */ '../views/Astronaut.vue'),
    meta: { title: 'Rocket Downrange - Astronaut' },
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "locations" */ '../views/Locations.vue'),
    meta: { title: 'Rocket Downrange - Locations' },
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: () => import(/* webpackChunkName: "vehicles" */ '../views/Vehicles.vue'),
    meta: { title: 'Rocket Downrange - Vehicles' },
  },
  {
    path: '/perseverance',
    name: 'Perseverance',
    component: () => import(/* webpackChunkName: "rovers" */ '../views/Perseverance.vue'),
    meta: { title: 'Rocket Downrange - Perseverance' },
  },
  {
    path: '/curiosity',
    name: 'Curiosity',
    component: () => import(/* webpackChunkName: "rovers" */ '../views/Curiosity.vue'),
    meta: { title: 'Rocket Downrange - Curiosity' },
  },
  {
    path: '/opportunity',
    name: 'Opportunity',
    component: () => import(/* webpackChunkName: "rovers" */ '../views/Opportunity.vue'),
    meta: { title: 'Rocket Downrange - Opportunity' },
  },
  {
    path: '/spirit',
    name: 'Spirit',
    component: () => import(/* webpackChunkName: "rovers" */ '../views/Spirit.vue'),
    meta: { title: 'Rocket Downrange - Spirit' },
  },
  {
    path: '/sojourner',
    name: 'Sojourner',
    component: () => import(/* webpackChunkName: "rovers" */ '../views/Sojourner.vue'),
    meta: { title: 'Rocket Downrange - Sojourner' },
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue'),
    meta: { title: 'Rocket Downrange - Test' },
  },
  {
    path: '/error-404',
    name: 'ERROR-404',
    component: () => import(/* webpackChunkName: "errors" */ '../views/ERROR-404.vue'),
    meta: { title: 'Rocket Downrange - 404 Not Found' },
  },
  {
    path: '/error-418',
    name: 'ERROR-418',
    component: () => import(/* webpackChunkName: "errors" */ '../views/ERROR-418.vue'),
    meta: { title: 'Rocket Downrange - 418 I\'m a Teapot' },
  },
  {
    path: '/locations/baikonur-cosmodrome',
    name: 'Baikonur Cosmodrome',
    component: () => import(/* webpackChunkName: "locations" */ '../views/locations/baikonur-cosmodrome.vue'),
    meta: { title: 'Rocket Downrange - Baikonur Cosmodrome' },
  },
  {
    path: '/locations/kennedy-space-center',
    name: 'Kennedy Space Center',
    component: () => import(/* webpackChunkName: "locations" */ '../views/locations/kennedy-space-center.vue'),
    meta: { title: 'Rocket Downrange - Kennedy Space Center' },
  },
  {
    path: '/locations/starbase',
    name: 'Starbase',
    component: () => import(/* webpackChunkName: "locations" */ '../views/locations/starbase.vue'),
    meta: { title: 'Rocket Downrange - Starbase' },
  },
  {
    path: '/locations/wallops-island',
    name: 'Wallops Island',
    component: () => import(/* webpackChunkName: "locations" */ '../views/locations/wallops-island.vue'),
    meta: { title: 'Rocket Downrange - Wallops Island' },
  },
  {
    path: '/locations/vandenberg',
    name: 'Vandenberg Space Force Base',
    component: () => import(/* webpackChunkName: "locations" */ '../views/locations/vandenberg.vue'),
    meta: { title: 'Rocket Downrange - Vandenberg Space Force Base' },
  },
  {
    path: '/:pathMatch(.*)*', // Vue 3 syntax for catch-all
    name: 'Catch All',
    component: () => import('../views/ERROR-404.vue'),
    meta: { title: 'Rocket Downrange - 404 Not Found' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Handle meta titles
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Rocket Downrange';
  next();
});

export default router;