import { useEffect, useMemo, useState } from 'react';
import Cart from '../component/Cart';

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://fakestoreapi.com/products', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load products');
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setStatus('ready');
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setStatus('error');
        }
      });

    return () => controller.abort();
  }, []);

  const categories = ['All', ...new Set(products.map((product) => product.category))];

  const visibleProducts = useMemo(() => {
    const result = products.filter(
      (product) => category === 'All' || product.category === category,
    );

    if (sort === 'price-low') {
      return [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === 'price-high') {
      return [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, products, sort]);

  return (
    <div>
      <div className="page-intro">
        <p className="eyebrow">The collection</p>
        <h1 className="serif">Everything considered.</h1>
        <p>
          A refined selection of pieces chosen for everyday rituals, quiet confidence, and a life well lived.
        </p>
      </div>

      <main className="container-wide section-space">
        <div className="mb-10 flex flex-col gap-5 border-b border-[var(--line)] pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`pb-2 text-[10px] font-bold uppercase tracking-[.16em] transition ${category === item ? 'border-b border-[var(--text)] text-[var(--text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-[var(--muted)]">
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="border-0 bg-transparent text-[var(--text)] outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>

        {status === 'loading' && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index}>
                <div className="aspect-[4/5] animate-pulse bg-[var(--surface)]" />
                <div className="mt-4 h-4 w-2/3 animate-pulse bg-[var(--surface)]" />
                <div className="mt-2 h-3 w-1/3 animate-pulse bg-[var(--surface)]" />
              </div>
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="border border-[var(--line)] bg-[var(--warm-white)] p-12 text-center">
            <p className="eyebrow">A quiet moment</p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              We couldn’t load the collection. Please refresh and try again.
            </p>
          </div>
        )}

        {status === 'ready' && visibleProducts.length === 0 && (
          <div className="border border-[var(--line)] bg-[var(--warm-white)] p-12 text-center text-sm text-[var(--muted)]">
            No pieces found in this edit.
          </div>
        )}

        {status === 'ready' && visibleProducts.length > 0 && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <Cart key={product.id} data={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Products;
