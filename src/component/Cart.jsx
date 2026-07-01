
function Cart({data}) {
    const {image, title, price,id} = data;
  return (
<>  
              <div>
                <div key={id} className='border  border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
                  <div className='h-67  flex items-center justify-center mb-4 overflow-hidden'>
                    <img src={image} alt={title} className='h-67 w-35 object-contain transition-transform duration-300 hover:scale-110' />
                  </div>
                  <p className='text-sm font-medium text-gray-800 truncate'>{title}</p>
                  <p className='text-sm text-gray-600 mt-1'>${price}</p>
                  <button className='rounded-xl text-white p-2 mb-4 mt-3 bg-amber-700 cursor-pointer object-contain transition-transform duration-300 hover:scale-110 '>Add to cart</button>
                </div>
              </div>
            
          
</>
  )
}

export default Cart