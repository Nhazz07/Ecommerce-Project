import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Cart from '../component/Cart';

const categories = [
  {
    name: 'Women',
    detail: 'Quiet essentials',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Men',
    detail: 'Refined daily wear',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Objects',
    detail: 'For considered spaces',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85',
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Home() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=8',
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error('Unable to load products');
        }

        setProducts(await response.json());
        setStatus('ready');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStatus('error');
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <section className="relative isolate min-h-[640px] overflow-hidden bg-[var(--surface-deep)] text-white sm:min-h-[720px]">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=90"
          alt="Editorial portrait wearing the new collection"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

        <div className="container-wide flex min-h-[640px] items-end pb-16 sm:min-h-[720px] sm:pb-24">
          <div className="max-w-xl reveal">
            <p className="eyebrow text-white/70">The new collection / 01</p>
            <h1 className="serif mt-5 text-6xl leading-[.88] tracking-[-.06em] sm:text-8xl">
              Less, but
              <br />
              <em>better.</em>
            </h1>
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/75 sm:text-base">
              A considered edit of everyday pieces. Made to hold their place in your wardrobe, and your life.
            </p>
            <Link to="/products" className="button-primary mt-8 bg-white text-black hover:bg-white/80">
              Explore the collection <Arrow />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 hidden text-[10px] font-bold uppercase tracking-[.2em] text-white/60 sm:block">
          Scroll to discover ↓
        </div>
      </section>

      <section className="section-space container-wide">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Shop by edit</p>
            <h2 className="section-title">A point of view.</h2>
          </div>
          <p className="section-copy max-w-sm text-sm">
            A small, thoughtful collection for the ways you move through the world.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link to="/products" key={category.name} className="group relative aspect-[4/5] overflow-hidden bg-[var(--surface)]">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/70">
                  {category.detail}
                </p>
                <h3 className="serif text-3xl">{category.name}</h3>
                <span className="mt-3 inline-flex text-xs font-bold uppercase tracking-[.16em]">
                  Shop edit <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20 sm:py-28">
        <div className="container-wide">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">The edit</p>
              <h2 className="section-title">Most wanted.</h2>
            </div>
            <Link to="/products" className="hidden text-xs font-bold uppercase tracking-[.16em] text-[var(--accent-dark)] sm:inline-flex sm:gap-2">
              View all <Arrow />
            </Link>
          </div>

          {status === 'loading' && (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="aspect-[4/5] animate-pulse bg-white/70" />
              ))}
            </div>
          )}

          {status === 'error' && (
            <div className="border border-[var(--line)] bg-[var(--warm-white)] p-8 text-center text-sm text-[var(--muted)]">
              The collection is taking a moment to arrive. Please refresh to try again.
            </div>
          )}

          {status === 'ready' && (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <Cart key={product.id} data={product} />
              ))}
            </div>
          )}

          <Link to="/products" className="button-secondary mt-10 w-full sm:hidden">
            View all pieces <Arrow />
          </Link>
        </div>
      </section>

      <section className="container-wide section-space">
        <div className="grid overflow-hidden bg-[var(--surface-deep)] md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-20">
            <p className="eyebrow">Our philosophy</p>
            <h2 className="section-title max-w-md">Luxury is a feeling, not a logo.</h2>
            <p className="section-copy mt-6 max-w-md text-sm">
              We believe in fewer, better things. Materials you want to touch. Shapes you want to live with. Design that gets more personal over time.
            </p>
            <Link to="/about" className="button-primary mt-8 w-fit">
              Discover our story <Arrow />
            </Link>
          </div>
          <div className="min-h-[360px] bg-[url('https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center" />
        </div>
      </section>
    </div>
  );
}

export default Home;
