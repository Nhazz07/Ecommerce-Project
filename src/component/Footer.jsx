import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-[var(--chrome)] text-[var(--chrome-text)]">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:py-20">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-[var(--chrome-text)] text-sm font-bold tracking-[-.08em] text-[var(--chrome)]">
              K
            </span>
            <span className="text-[13px] font-bold uppercase tracking-[.22em]">
              Kora / House
            </span>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/55">
            Objects and essentials with a quieter point of view. Designed to live beautifully, every day.
          </p>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">
            Explore
          </p>
          <div className="space-y-3 text-sm text-white/65">
            <Link className="block hover:text-white" to="/products">Shop all</Link>
            <Link className="block hover:text-white" to="/about">Our story</Link>
            <Link className="block hover:text-white" to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">
            Client care
          </p>
          <div className="space-y-3 text-sm text-white/65">
            <span className="block">Shipping &amp; returns</span>
            <span className="block">Care guide</span>
            <span className="block">Privacy</span>
          </div>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[var(--accent)]">
            Stay in the know
          </p>
          <p className="mb-4 text-sm leading-6 text-white/55">
            Monthly notes on new arrivals, considered living, and good design.
          </p>
          <div className="flex border-b border-white/25 pb-3">
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="container-wide flex flex-col gap-3 border-t border-white/10 py-5 text-[10px] uppercase tracking-[.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Kora / House</span>
        <span>Made for a life well lived</span>
      </div>
    </footer>
  );
}

export default Footer;
