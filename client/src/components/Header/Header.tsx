import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='bg-slate-300 shadow-md m-5 rounded-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-red-900'>Igor</span>
            <span className='text-red-400'>Estate</span>
          </h1>
        </Link>
        <form className=' bg-slate-100 rounded-md w-24 sm:w-60 p-2.5 flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none'
          />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-3 font-bold'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:cursor-pointer'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:cursor-pointer'>
              About
            </li>
          </Link>
          <Link to='/sign-in'>
            <li className='text-slate-700 hover:cursor-pointer'>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
