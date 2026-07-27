/* Theme control — one button cycling system → light → dark.
 *
 * All three glyphs ship in the markup; modernist.css shows only the one that
 * matches the current data-theme on <html>, so there is nothing to swap at
 * runtime and no state to hydrate. Behaviour lives in public/theme.js, wired
 * by delegation, which is why this stays a server component and why the same
 * markup can be pasted verbatim into the standalone source previews.
 *
 * The accessible name is written by theme.js once it knows the stored choice;
 * the value here is the pre-script fallback, never a lie about the state
 * because "Theme" alone makes no claim. */

export default function ThemeToggle() {
  return (
    <button
      className="theme-toggle btn btn-icon btn-secondary"
      type="button"
      data-theme-toggle
      aria-label="Theme"
    >
      {/* system: half-filled circle */}
      <svg className="ti-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
      </svg>
      {/* light: sun */}
      <svg className="ti-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
      </svg>
      {/* dark: moon */}
      <svg className="ti-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
      </svg>
    </button>
  );
}
