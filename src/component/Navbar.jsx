import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

function SearchIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="11" cy="11" r="6.8" />
      <path d="m16.2 16.2 4.3 4.3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 20c.7-3.4 3-5.1 6.5-5.1s5.8 1.7 6.5 5.1" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M20.8 8.5c0 5.3-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.5A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.4Z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 8.5h14l-1 11H6l-1-11Z" />
      <path d="M9 9V6.6a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function ThemeIcon({ theme }) {
  if (theme === 'luxury') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M20.5 15.2A8.4 8.4 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
    </svg>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'luxury';
    }

    return window.localStorage.getItem('kora-theme') || 'luxury';
  });
  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/products', label: 'Shop' },
    { to: '/about', label: 'Our story' },
    { to: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('theme-light', theme === 'light');
    document.documentElement.classList.toggle('theme-luxury', theme === 'luxury');
    window.localStorage.setItem('kora-theme', theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute('content', theme === 'luxury' ? '#050505' : '#ffffff');
  }, [theme]);

  return (
    <header className="bg-[var(--warm-white)]">
      <div className="bg-[var(--chrome)] px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--chrome-text)]">
        Complimentary shipping on orders over $50
        <span className="ml-2 text-[var(--accent)]">•</span> Designed for the everyday extraordinary
      </div>

      <nav className="container-wide relative flex min-h-[78px] items-center justify-between gap-6" aria-label="Main navigation">
        <button
          className="icon-button lg:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon />
        </button>

        <NavLink to="/" className="group flex items-center gap-3" aria-label="Kora home">
          <span className="flex h-9 w-9 items-center justify-center bg-[var(--chrome)] text-sm font-bold tracking-[-.08em] text-[var(--chrome-text)]">
            K
          </span>
          <span className="hidden text-[13px] font-bold uppercase tracking-[.22em] sm:block">
            Kora / House
          </span>
        </NavLink>

        <div
          className={`absolute left-0 top-full z-20 w-full border-t border-[var(--line)] bg-[var(--warm-white)] px-5 py-5 shadow-xl lg:static lg:flex lg:w-auto lg:items-center lg:gap-9 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${menuOpen ? 'block' : 'hidden lg:flex'}`}
        >
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `block border-b border-[var(--line)] py-3 text-xs font-bold uppercase tracking-[.16em] last:border-0 lg:border-0 lg:py-2 ${isActive ? 'text-[var(--accent-dark)]' : 'text-[var(--muted)] hover:text-[var(--text)]'}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button className="icon-button" aria-label="Search" onClick={() => setSearchOpen((value) => !value)}>
            <SearchIcon />
          </button>
          <button
            className="icon-button"
            aria-label={`Switch to ${theme === 'luxury' ? 'light' : 'luxury'} theme`}
            title={`Switch to ${theme === 'luxury' ? 'light' : 'luxury'} theme`}
            onClick={() => setTheme((value) => (value === 'luxury' ? 'light' : 'luxury'))}
          >
            <ThemeIcon theme={theme} />
          </button>
          <button className="icon-button hidden sm:inline-flex" aria-label="Account">
            <UserIcon />
          </button>
          <button className="icon-button hidden sm:inline-flex" aria-label="Wishlist">
            <HeartIcon />
          </button>
          <button className="icon-button" aria-label="Shopping bag">
            <BagIcon />
            <span className="badge-dot">0</span>
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--surface)]">
          <div className="container-wide flex items-center gap-3 py-3">
            <SearchIcon className="h-5 w-5 shrink-0" />
            <input
              autoFocus
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Search our collection"
              aria-label="Search products"
            />
            <button
              className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]"
              onClick={() => setSearchOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
