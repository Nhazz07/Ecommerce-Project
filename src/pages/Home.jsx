import { useEffect, useState } from "react";
import { Link } from "react-router";
import Cart from "../component/Cart";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const rest = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await rest.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    // Home Information
    <div className="bg-orange-50 text-center">
      <section className="min-h-svh pt-45 space-y-3">
        <h1>New Collection </h1>
        <h3 className="font-bold text-4xl">Luxary Without Labels</h3>
        <p>Explore new-in product and best sellers</p>
        <button className="bg-orange-600 rounded-md px-4 py-2 hover:bg-amber-500 text-white ">
          View Collection
        </button>
      </section>

      {/* // product info */}
      <div className="px-8 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-300">Best Seller</h2>
          <p className="text-gray-500 mt-2">Explore our best seller product</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((items) => (
            <Link to={`/details/${items.id}`} key={items.id}>
              <Cart data={items}></Cart>
            </Link>
          ))}
        </div>
      </div>
      <Link to="/products">
        <button className="bg-black text-white cursor-pointer p-3 mb-4 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black">
          Explore more
        </button>
      </Link>
    </div>
  );
}

export default Home;
