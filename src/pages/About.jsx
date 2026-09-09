import { Link } from 'react-router';

function About() {
  return (
    <div>
      <div className="page-intro">
        <p className="eyebrow">The house</p>
        <h1 className="serif">Made for a life well lived.</h1>
        <p>
          We make space for the things that matter: thoughtful design, honest materials, and a little more beauty in the everyday.
        </p>
      </div>

      <main className="container-wide section-space">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div className="relative">
            <img src="/img.jpg" alt="A considered workspace" className="aspect-[4/3] w-full object-cover" />
            <span className="absolute bottom-4 left-4 bg-[var(--warm-white)] px-4 py-3 text-[10px] font-bold uppercase tracking-[.16em]">
              Since 2016
            </span>
          </div>

          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title max-w-md">A quieter kind of luxury.</h2>
            <div className="section-copy mt-7 space-y-5 text-sm">
              <p>
                Kora / House began with a simple idea: the everyday deserves more consideration. We look for the balance between utility and beauty—the kind of objects and essentials that become better companions with time.
              </p>
              <p>
                Our edit is intentionally small. Each piece is chosen for its materials, its point of view, and the way it can settle naturally into your life.
              </p>
            </div>
            <Link to="/products" className="button-primary mt-8">
              Explore the collection ↗
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-px bg-[var(--line)] sm:mt-28 md:grid-cols-3">
          <div className="bg-[var(--paper)] p-8">
            <p className="eyebrow">01 / Considered</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              A smaller edit, selected with more intention. Nothing here is accidental.
            </p>
          </div>
          <div className="bg-[var(--paper)] p-8">
            <p className="eyebrow">02 / Enduring</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              We choose quality and character over novelty, so your favorites can stay favorites.
            </p>
          </div>
          <div className="bg-[var(--paper)] p-8">
            <p className="eyebrow">03 / Personal</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              The best design leaves room for you. Our pieces are made to become your own.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
