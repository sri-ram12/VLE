/**
 * Website Live / Blocked Status Toggle
 * 
 * Set `WEBSITE_DISABLED = true` to render the authentic blank white "Server unable to reach / This site can't be reached" error screen.
 * 
 * Set `WEBSITE_DISABLED = false` once payment is received to immediately bring the complete website back live.
 * 
 * Developer Secret Bypass:
 * - Append `?preview=live` or `?bypass=true` to any URL.
 * - Or click the document icon 4 times on the error screen.
 * - Or press `Ctrl + Shift + L` on your keyboard and enter passcode: `vle` or `paid`.
 */
export const WEBSITE_DISABLED = true;

// Optional: Fallback configuration if using standard maintenance screen instead
export const IS_MAINTENANCE_MODE = false;

export const MAINTENANCE_INFO = {
  headline: "Website Temporarily Offline",
  tagline: "Showroom Maintenance & System Upgrades in Progress",
  description: "Our online portal is temporarily paused while we update our wholesale catalog and inventory systems. Our physical showroom is 100% open and operating normally!",
  notice: "Physical Showroom Open: Monday – Sunday (8:00 AM – 9:00 PM)",
  bypassPasscode: "vle2026",
};
