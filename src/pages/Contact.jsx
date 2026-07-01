

function Contact() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='bg-white p-10 rounded-2xl shadow-md w-full max-w-md'>
        
        <h1 className='text-3xl font-bold text-gray-800 text-center mb-8'>Contact Us</h1>

        <div className='flex flex-col gap-5'>

          <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-gray-700'>
              Username <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              className='border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-gray-700'>
              Phone Number <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Enter Phone Number'
              className='border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium text-gray-700'>
              Message <span className='text-red-500'>*</span>
            </label>
            <textarea
              placeholder='Type your message here...'
              rows={5}
              className='border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none'
            />
          </div>

          <button
            type='submit'
            className='bg-amber-600 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:bg-amber-700 hover:scale-105 cursor-pointer'
          >
            Submit
          </button>

        </div>
      </div>
    </div>
  )
}

export default Contact