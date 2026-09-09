import { Link } from 'react-router';

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M20.8 8.5c0 5.3-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.5A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.4Z" />
    </svg>
  );
}

function Cart({ data }) {
  const { image, title, price, id, category } = data;

  return (
    <article className="group relative">
      <Link to={`/details/${id}`} className="block">
        <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[var(--surface)] p-8">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="theme-product-image h-full w-full object-contain transition duration-500 ease-out group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 bg-[var(--warm-white)] px-2 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-[var(--muted)]">
            Curated
          </span>
          <button
            type="button"
            aria-label={`Add ${title} to wishlist`}
            className="icon-button absolute right-3 top-3 bg-[var(--warm-white)] opacity-0 shadow-sm transition duration-200 group-hover:opacity-100"
            onClick={(event) => event.preventDefault()}
          >
            <HeartIcon />
          </button>
          <span className="absolute bottom-3 left-3 right-3 translate-y-2 bg-[var(--chrome)] py-3 text-center text-[10px] font-bold uppercase tracking-[.18em] text-[var(--chrome-text)] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View piece
          </span>
        </div>
        <div className="flex items-start justify-between gap-3 pt-4">
          <div className="min-w-0">
            <p className="mb-1 truncate text-[10px] font-bold uppercase tracking-[.16em] text-[var(--accent-dark)]">
              {category}
            </p>
            <h3 className="truncate text-sm font-medium leading-6 text-[var(--text)]">
              {title}
            </h3>
          </div>
          <p className="shrink-0 text-sm font-bold">${Number(price).toFixed(2)}</p>
        </div>
      </Link>
    </article>
  );
}

export default Cart;
