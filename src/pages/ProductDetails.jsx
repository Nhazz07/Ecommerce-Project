import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const rs = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await rs.json();
            setProduct(data);
        }
        if (id) {
            fetchData();
        }
    }, [id]);


    return (
        <>
            <div className='bg-gray-100 px-44 mt-2'>
                <Link to="/">Home <i className="fa-solid fa-angle-right"></i></Link>
                <Link to="/products">Product <i className="fa-solid fa-angle-right"></i></Link>
                <b>{product.title}</b>
            </div>
            <div className='grid grid-cols-2 gap-5 w-200 m-auto my-10'>
                <div className='h-120 border p-5 '>
                    <img
                        className='w-full h-full'
                        src={product.image} alt="" />
                </div>

                <div className='space-y-2'>
                    <p className='text-xl uppercase'>{product.category}</p>
                    <h1 className='text-3xl font-bold'>{product.title}</h1>
                    <h1 className='text-xl font-bold'>{product.price}</h1>
                    <div className='flex gap-5'>
                        <div className='border px-2 py-1 rounded-md border-gray-200'>
                            <button className='px-4'>-</button>
                            <span>1</span>
                            <button className='px-4'>+</button>
                        </div>
                        <div>
                            <button className='bg-amber-700 px-4 py-2 rounded-md text-white hover:bg-amber-800 transition-all hover:shadow '>Add to cart</button>
                        </div>
                    </div>
                    <hr className='text-amber-400 my-5' />
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
