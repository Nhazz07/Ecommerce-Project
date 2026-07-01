import { Link } from 'react-router'

function Footer() {
  return (
    <footer className='w-full bg-black text-white'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm sm:flex-row sm:px-10'>
        <div>Copyright &copy; 2026 - MasterIT Store</div>
        <div className='flex flex-wrap justify-center gap-5'>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/">Term and conditional</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
