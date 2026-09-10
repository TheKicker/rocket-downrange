/**
 * Launch time formatting.
 *
 * Launch windows come off the APIs as UTC ISO strings. `toLocaleString`
 * with no locale argument already renders them in the visitor's own
 * timezone - that part was always right. What was missing was any label
 * saying so, which left a reader unable to tell whose clock they were
 * looking at. Every helper here prints the zone.
 */

/** The viewer's IANA timezone, e.g. "America/New_York". */
export function viewerTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'your local time';
  } catch (e) {
    return 'your local time';
  }
}

/** Short zone label for the viewer, e.g. "EDT" or "GMT+2". */
export function viewerTimeZoneLabel(value = new Date()) {
  try {
    const parts = new Intl.DateTimeFormat(undefined, {
      timeZoneName: 'short',
    }).formatToParts(value instanceof Date ? value : new Date(value));
    const zone = parts.find((p) => p.type === 'timeZoneName');
    return zone ? zone.value : '';
  } catch (e) {
    return '';
  }
}

function parse(value) {
  if (!value) return null;
  const d = value instanceof Date ? value : new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

/**
 * Full launch timestamp in the viewer's timezone, with the zone named.
 * e.g. "Sep 10, 2026, 4:31 PM EDT"
 */
export function formatLaunchTime(value, fallback = 'TBD') {
  const d = parse(value);
  if (!d) return fallback;
  try {
    return d.toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZoneName: 'short',
    });
  } catch (e) {
    // Safari < 14 rejects dateStyle/timeStyle together with timeZoneName
    return d.toLocaleString();
  }
}

/**
 * Same, but spelled out for a page heading.
 * e.g. "Thursday, September 10, 2026 at 4:31 PM Eastern Daylight Time"
 */
export function formatLaunchTimeLong(value, fallback = 'TBD') {
  const d = parse(value);
  if (!d) return fallback;
  try {
    return d.toLocaleString(undefined, {
      dateStyle: 'full',
      timeStyle: 'long',
    });
  } catch (e) {
    return d.toLocaleString();
  }
}

/** UTC rendering, for showing alongside local time. */
export function formatUtc(value, fallback = 'TBD') {
  const d = parse(value);
  if (!d) return fallback;
  return `${d.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
}

/**
 * Machine-readable value for a <time datetime="..."> attribute.
 * Search engines and assistive tech read this rather than the display text.
 */
export function isoAttr(value) {
  const d = parse(value);
  return d ? d.toISOString() : null;
}

export default formatLaunchTime;
