import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

function StarRating() {
  return (
    <div className="flex items-center gap-1 text-[var(--accent)]" aria-label="4.8 out of 5 stars">
      <span>★★★★★</span>
      <span className="ml-2 text-[10px] font-bold uppercase tracking-[.12em] text-[var(--muted)]">
        4.8 (24 reviews)
      </span>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://fakestoreapi.com/products/${id}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load product');
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setStatus('ready');
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setStatus('error');
        }
      });

    return () => controller.abort();
  }, [id]);

  if (status === 'loading') {
    return (
      <div className="container-wide section-space">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="aspect-square animate-pulse bg-[var(--surface)]" />
          <div className="space-y-5">
            <div className="h-4 w-1/4 animate-pulse bg-[var(--surface)]" />
            <div className="h-12 w-3/4 animate-pulse bg-[var(--surface)]" />
            <div className="h-6 w-1/4 animate-pulse bg-[var(--surface)]" />
          </div>
        </div>
      </div>
    );
  }

  if (status === 'error' || !product) {
    return (
      <div className="container-wide section-space text-center">
        <p className="eyebrow">Piece unavailable</p>
        <h1 className="serif mt-3 text-4xl">We couldn’t find that piece.</h1>
        <Link to="/products" className="button-primary mt-8">
          Return to collection
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="container-wide py-5 text-[10px] font-bold uppercase tracking-[.16em] text-[var(--muted)]">
        <Link to="/" className="hover:text-[var(--text)]">Home</Link>
        <span className="mx-3 text-[var(--accent)]">/</span>
        <Link to="/products" className="hover:text-[var(--text)]">Shop</Link>
        <span className="mx-3 text-[var(--accent)]">/</span>
        <span className="text-[var(--text)]">{product.category}</span>
      </div>

      <main className="container-wide pb-20 pt-5 sm:pb-28 sm:pt-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:gap-20">
          <div className="bg-[var(--surface)] p-10 sm:p-16">
            <div className="flex aspect-square items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="theme-product-image h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow">{product.category}</p>
            <h1 className="serif mt-4 text-4xl leading-[.98] tracking-[-.04em] sm:text-6xl">
              {product.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <p className="text-xl font-bold">${Number(product.price).toFixed(2)}</p>
              <StarRating />
            </div>

            <p className="section-copy mt-7 max-w-lg text-sm">{product.description}</p>

            <div className="my-8 border-y border-[var(--line)] py-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[.14em]">Quantity</span>
                <span className="text-xs text-[var(--muted)]">In stock</span>
              </div>

              <div className="flex gap-3">
                <div className="flex h-12 items-center border border-[var(--line)] bg-[var(--warm-white)]">
                  <button
                    className="h-full w-12 text-lg text-[var(--muted)] hover:text-[var(--text)]"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm">{quantity}</span>
                  <button
                    className="h-full w-12 text-lg text-[var(--muted)] hover:text-[var(--text)]"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((value) => value + 1)}
                  >
                    +
                  </button>
                </div>

                <button className="button-primary flex-1" onClick={() => setAdded(true)}>
                  {added ? 'Added to bag ✓' : 'Add to bag'}
                </button>
                <button className="icon-button h-12 w-12 border border-[var(--line)]" aria-label="Add to wishlist">
                  ♡
                </button>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-[var(--line)] pb-4">
                <span>Shipping</span>
                <span className="text-[var(--muted)]">Complimentary over $50</span>
              </div>
              <div className="flex justify-between border-b border-[var(--line)] pb-4">
                <span>Returns</span>
                <span className="text-[var(--muted)]">30 days, easy returns</span>
              </div>
              <div className="flex justify-between">
                <span>Material</span>
                <span className="text-[var(--muted)]">Considered materials</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--line)] pt-10 sm:mt-28">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Complete the edit</p>
              <h2 className="section-title text-3xl sm:text-4xl">More to discover.</h2>
            </div>
            <Link to="/products" className="text-xs font-bold uppercase tracking-[.16em] text-[var(--accent-dark)]">
              View all pieces ↗
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
