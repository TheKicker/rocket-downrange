/**
 * Per-route SEO: title, description, canonical, Open Graph, Twitter cards
 * and JSON-LD structured data.
 *
 * The app is a client-rendered SPA, so every route is served the same
 * index.html. Everything here is applied on navigation from the router.
 */

export const SITE_URL = 'https://rocketdownrange.com';
export const SITE_NAME = 'Rocket Downrange';
export const DEFAULT_IMAGE = `${SITE_URL}/rocketdownrange.jpg`;

const DEFAULT_DESCRIPTION =
  'Live rocket launch schedules, astronaut and vehicle rosters, Mars rover data, ' +
  "NASA's Astronomy Picture of the Day and spaceport profiles - powered by NASA and The Space Devs APIs.";

/**
 * path -> page metadata.
 * `description` is written per page so no two routes share meta text.
 * `noindex` marks pages that should never appear in search results.
 */
export const PAGES = {
  '/': {
    title: 'Rocket Downrange - Live Rocket Launch Schedule & Space Data',
    description:
      'Track upcoming rocket launches, the latest space news, Mars rover updates and the Astronomy Picture of the Day, all in one place.',
  },
  '/about': {
    title: 'About - Rocket Downrange',
    description:
      'What Rocket Downrange is, which APIs power it, and who builds it. A hobby project celebrating humanity’s advances in space exploration.',
  },
  '/apod': {
    title: "Astronomy Picture of the Day - NASA APOD Archive",
    description:
      "Browse NASA's Astronomy Picture of the Day, with the full explanation for each image and a date picker for exploring the historical archive.",
  },
  '/calculator': {
    title: 'Space Calculators - Rocket Downrange',
    description: 'Celestial positioning and spaceflight calculators. This section is still in development.',
    noindex: true, // placeholder page - nothing to index yet
  },
  '/accessibility-statement': {
    title: 'Accessibility Statement - Rocket Downrange',
    description:
      'Rocket Downrange’s commitment to WCAG-aligned accessibility, the standards we follow, and how to report a barrier you run into.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy - Rocket Downrange',
    description:
      'How Rocket Downrange handles analytics, advertising cookies and third-party API data, and the choices available to you.',
  },

  // --- Launch providers ---
  '/spacex': {
    title: 'SpaceX - Next Launch, Latest Mission & Company Profile',
    description:
      "SpaceX's next and most recent launches, Starman's current position, Starlink and Starship milestones, and live SpaceX market data.",
  },
  '/sierra-space': {
    title: 'Sierra Space - Dream Chaser & LIFE Habitat',
    description:
      'Sierra Space company profile: the Dream Chaser spaceplane, the inflatable LIFE habitat, and the company’s commercial station work.',
  },
  '/astrobotic': {
    title: 'Astrobotic - Lunar Landers & CLPS Missions',
    description:
      'Astrobotic’s Peregrine and Griffin lunar landers, its NASA CLPS delivery contracts, and the next Astrobotic mission on the schedule.',
  },
  '/astra': {
    title: 'Astra - Rocket 3, Launch History & Company Profile',
    description:
      'Astra Space company profile covering the Rocket 3 campaign from Kodiak, its orbital milestones, and the next Astra launch.',
  },
  '/blue-origin': {
    title: 'Blue Origin - New Shepard, New Glenn & Next Launch',
    description:
      'Blue Origin’s New Shepard suborbital flights, New Glenn orbital rocket, crewed mission history and the next scheduled launch.',
  },
  '/firefly-aerospace': {
    title: 'Firefly Aerospace - Alpha Rocket & Next Launch',
    description:
      'Firefly Aerospace company profile: the Alpha launch vehicle, responsive-launch record attempts, and the next Firefly mission.',
  },
  '/virgin-galactic': {
    title: 'Virgin Galactic - SpaceShipTwo & Commercial Spaceflight',
    description:
      'Virgin Galactic’s SpaceShipTwo programme, Unity’s crewed suborbital flights from Spaceport America, and upcoming missions.',
  },
  '/united-launch-alliance': {
    title: 'United Launch Alliance - Atlas V, Delta IV & Vulcan',
    description:
      'ULA company profile covering Atlas V, the retired Delta IV Heavy, the Vulcan Centaur, and the next ULA launch on the manifest.',
  },
  '/relativity-space': {
    title: 'Relativity Space - Terran 1, Terran R & 3D-Printed Rockets',
    description:
      'Relativity Space and its 3D-printed launch vehicles: the Terran 1 test campaign, the pivot to Terran R, and what comes next.',
  },
  '/rocket-lab': {
    title: 'Rocket Lab - Electron, Neutron & Next Launch',
    description:
      'Rocket Lab company profile: Electron launches from Mahia and Wallops, booster recovery attempts, Neutron, and the next mission.',
  },

  // --- Reference sections ---
  '/solar-system': {
    title: 'The Solar System - Planet Profiles & Facts',
    description:
      'Profiles of the Sun, every planet, and Pluto and Ceres - size, orbit, atmosphere and the missions that have visited each one.',
  },
  '/astronaut': {
    title: "Who's in Space? - Astronauts In Flight, Retired & Lost",
    description:
      'A living roster of the humans who have flown to space: who is in orbit right now, who has retired from flight, and who was lost.',
  },
  '/locations': {
    title: 'Rocket Launch Sites & Spaceports Around the World',
    description:
      'An interactive map of the world’s launch and landing sites, from Baikonur and Kennedy Space Center to Starbase and Mahia.',
  },
  '/vehicles': {
    title: 'Launch Vehicles - Active, Retired & Lost Rockets',
    description:
      'The rockets that carry us off the planet: active launch vehicles, retired workhorses like Saturn V, and vehicles lost in flight.',
  },

  // --- Mars rovers ---
  '/perseverance': {
    title: 'Perseverance Rover - Latest Photos & Mission Data',
    description:
      'NASA’s Perseverance rover on Mars: the newest raw images from Jezero Crater, mission background and the Ingenuity helicopter.',
  },
  '/curiosity': {
    title: 'Curiosity Rover - Latest Photos & Mission Data',
    description:
      'NASA’s Curiosity rover in Gale Crater: recent raw camera images, mission history and what it has found on the Martian surface.',
  },
  '/opportunity': {
    title: 'Opportunity Rover - Mission Archive & Photos',
    description:
      'The Opportunity rover’s 15-year Martian marathon, its final transmission, and an archive of images from Meridiani Planum.',
  },
  '/spirit': {
    title: 'Spirit Rover - Mission Archive & Photos',
    description:
      'The Spirit rover’s mission in Gusev Crater: its journey, the sand trap that ended it, and images from the Martian surface.',
  },
  '/sojourner': {
    title: 'Sojourner - The First Mars Rover',
    description:
      'Sojourner, the Mars Pathfinder rover that in 1997 became the first wheeled vehicle to operate on another planet.',
  },

  // --- Error pages ---
  '/error-404': {
    title: 'Page Not Found - Rocket Downrange',
    description: 'The page you were looking for could not be found.',
    noindex: true,
  },
  '/error-418': {
    title: "I'm a Teapot - Rocket Downrange",
    description: 'HTTP 418. Short and stout.',
    noindex: true,
  },
};

/**
 * Launch sites, with coordinates taken from each location view's map marker.
 * Used for both page metadata and Place structured data.
 */
export const LOCATIONS = {
  '/locations/baikonur-cosmodrome': {
    name: 'Baikonur Cosmodrome',
    region: 'Kazakh Steppe, Kazakhstan',
    operator: 'Roscosmos',
    lat: 45.965,
    lon: 63.305,
    description:
      'Baikonur Cosmodrome in Kazakhstan - the world’s oldest and largest spaceport, and the site of Yuri Gagarin’s first human spaceflight.',
  },
  '/locations/kennedy-space-center': {
    name: 'Kennedy Space Center',
    region: 'Cape Canaveral, Florida, United States',
    operator: 'NASA & US Space Force',
    lat: 28.524,
    lon: -80.65,
    description:
      'NASA’s Kennedy Space Center at Cape Canaveral, Florida - home of Launch Complex 39A, the Apollo Moon launches and today’s crewed missions.',
  },
  '/locations/guiana-space-center': {
    name: 'Guiana Space Centre',
    region: 'Kourou, French Guiana',
    operator: 'ESA & Arianespace',
    lat: 5.169,
    lon: -52.69,
    description:
      'The Guiana Space Centre near Kourou - Europe’s primary spaceport, whose near-equatorial location gives launches a performance advantage.',
  },
  '/locations/tanegashima-space-center': {
    name: 'Tanegashima Space Center',
    region: 'Tanegashima, Japan',
    operator: 'JAXA',
    lat: 30.4,
    lon: 130.97,
    description:
      'Tanegashima Space Center, JAXA’s largest launch facility, on an island off southern Japan and often called the most beautiful spaceport on Earth.',
  },
  '/locations/pacific-spaceport': {
    name: 'Pacific Spaceport Complex',
    region: 'Kodiak Island, Alaska, United States',
    operator: 'Alaska Aerospace',
    lat: 57.435,
    lon: -152.34,
    description:
      'The Pacific Spaceport Complex on Kodiak Island, Alaska - a high-latitude site favoured for polar and sun-synchronous orbit launches.',
  },
  '/locations/launch-complex-1': {
    name: 'Rocket Lab Launch Complex 1',
    region: 'Mahia Peninsula, New Zealand',
    operator: 'Rocket Lab',
    lat: -39.261,
    lon: 177.866,
    description:
      'Rocket Lab’s Launch Complex 1 on the Mahia Peninsula - the world’s first private orbital launch site, home of the Electron rocket.',
  },
  '/locations/corn-ranch': {
    name: 'Corn Ranch (Launch Site One)',
    region: 'Van Horn, Texas, United States',
    operator: 'Blue Origin',
    lat: 31.423,
    lon: -104.757,
    description:
      'Blue Origin’s Corn Ranch in West Texas - the suborbital site where New Shepard flies its crewed and uncrewed missions.',
  },
  '/locations/starbase': {
    name: 'Starbase',
    region: 'Boca Chica, Texas, United States',
    operator: 'SpaceX',
    lat: 25.9858,
    lon: -97.1822,
    description:
      'SpaceX’s Starbase at Boca Chica, Texas - the build and launch site for Starship and the Super Heavy booster.',
  },
  '/locations/wallops-island': {
    name: 'Wallops Flight Facility',
    region: 'Wallops Island, Virginia, United States',
    operator: 'NASA & US Space Force',
    lat: 37.9375,
    lon: -75.4704,
    description:
      'NASA’s Wallops Flight Facility in Virginia - a sounding-rocket and small-launch site, and Rocket Lab’s US Electron pad.',
  },
  '/locations/vandenberg': {
    name: 'Vandenberg Space Force Base',
    region: 'Santa Barbara County, California, United States',
    operator: 'US Space Force',
    lat: 34.7328,
    lon: -120.5681,
    description:
      'Vandenberg Space Force Base on the California coast - the primary US site for polar and sun-synchronous orbit launches.',
  },
};

// Fold the launch sites into the main page table.
Object.entries(LOCATIONS).forEach(([path, loc]) => {
  PAGES[path] = {
    title: `${loc.name} - Launch Site Profile`,
    description: loc.description,
  };
});

/** Normalise a router path into a stable canonical path. */
export function canonicalPath(path) {
  if (!path || path === '/') return '/';
  // strip query, hash and any trailing slash; lower-case for consistency
  const clean = path.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean.toLowerCase() || '/';
}

export function canonicalUrl(path) {
  const p = canonicalPath(path);
  return p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`;
}

/** Look up metadata for a path, falling back to site defaults. */
export function seoFor(path) {
  const p = canonicalPath(path);
  const page = PAGES[p];
  if (page) return { ...page, canonical: canonicalUrl(p) };
  // unknown path -> the catch-all 404 view
  return {
    title: 'Page Not Found - Rocket Downrange',
    description: 'The page you were looking for could not be found.',
    noindex: true,
    canonical: canonicalUrl(p),
  };
}

/* ------------------------------------------------------------------ */
/* DOM helpers                                                         */
/* ------------------------------------------------------------------ */

function upsertMeta(keyAttr, keyValue, content) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(`meta[${keyAttr}="${keyValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(keyAttr, keyValue) {
  if (typeof document === 'undefined') return;
  const el = document.head.querySelector(`meta[${keyAttr}="${keyValue}"]`);
  if (el) el.remove();
}

function upsertLink(rel, href) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  sameAs: ['https://github.com/TheKicker/rocket-downrange'],
};

const WEBSITE = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  description: DEFAULT_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
};

function breadcrumbFor(path, title) {
  const p = canonicalPath(path);
  if (p === '/') return null;

  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }];
  const segments = p.split('/').filter(Boolean);

  segments.forEach((seg, i) => {
    const segPath = '/' + segments.slice(0, i + 1).join('/');
    const isLast = i === segments.length - 1;
    const known = PAGES[segPath];
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: isLast ? title.split(' - ')[0] : known ? known.title.split(' - ')[0] : seg,
      item: canonicalUrl(segPath),
    });
  });

  return { '@type': 'BreadcrumbList', itemListElement: items };
}

/** Build the JSON-LD graph for a given path. */
export function jsonLdFor(path, meta) {
  const p = canonicalPath(path);
  const graph = [ORGANIZATION, WEBSITE];

  const page = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl(p)}#webpage`,
    url: canonicalUrl(p),
    name: meta.title,
    description: meta.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en',
  };
  graph.push(page);

  const crumbs = breadcrumbFor(p, meta.title);
  if (crumbs) graph.push(crumbs);

  // Launch sites get a Place with real coordinates.
  const loc = LOCATIONS[p];
  if (loc) {
    graph.push({
      '@type': 'Place',
      '@id': `${canonicalUrl(p)}#place`,
      name: loc.name,
      description: loc.description,
      address: { '@type': 'PostalAddress', addressLocality: loc.region },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.lat,
        longitude: loc.lon,
      },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

function applyJsonLd(data) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector('script[data-rdr-jsonld]');
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-rdr-jsonld', '');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/* ------------------------------------------------------------------ */
/* Entry point                                                         */
/* ------------------------------------------------------------------ */

/**
 * Apply all head tags for a route. Called from the router on every
 * navigation.
 */
export function applySeo(path) {
  const meta = seoFor(path);
  const url = meta.canonical;

  document.title = meta.title;

  upsertMeta('name', 'description', meta.description);
  upsertLink('canonical', url);

  if (meta.noindex) {
    upsertMeta('name', 'robots', 'noindex, follow');
  } else {
    removeMeta('name', 'robots');
  }

  // Open Graph
  upsertMeta('property', 'og:title', meta.title);
  upsertMeta('property', 'og:description', meta.description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:site_name', SITE_NAME);
  upsertMeta('property', 'og:image', meta.image || DEFAULT_IMAGE);

  // Twitter / X
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', meta.title);
  upsertMeta('name', 'twitter:description', meta.description);
  upsertMeta('name', 'twitter:image', meta.image || DEFAULT_IMAGE);

  applyJsonLd(jsonLdFor(path, meta));
}

export default applySeo;
