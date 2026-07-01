import  { useEffect, useState } from 'react'
import Cart from '../component/Cart';
import { Link } from 'react-router';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    const fetchData = async() =>{
      const rest = await fetch('https://fakestoreapi.com/products')
      const data = await rest.json();
      setProducts(data)
    }
    fetchData();
  },[])
  return (
    <div className='text-center'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-gray-300'>All Products </h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {
          products.map(items => (
            <Link to={`/details/${items.id}`} key={items.id}>
              <Cart data = {items}></Cart>
            </Link>
          ))
        }
        </div>
        
        </div>
  )
}

export default Products
