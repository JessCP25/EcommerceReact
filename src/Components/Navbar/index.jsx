import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4';
  return(
    <nav className='flex fixed z-10 w-full justify-between py-5 px-8 text-sm bg-[#00796B] text-white'>
      <ul className='flex items-center gap-3'>
        <li className='text-lg font-bold'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink to='/'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >All</NavLink>
        </li>
        <li>
          <NavLink to='/clothes'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Clothes</NavLink>
        </li>
        <li>
          <NavLink to='/electronics'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Electronics</NavLink>
        </li>
        <li>
          <NavLink to='/furniture'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Furniture</NavLink>
        </li>
        <li>
          <NavLink to='/toys'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Toys</NavLink>
        </li>
        <li>
          <NavLink to='/others'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Others</NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-[#d8d8d8]/60'>
          jpayanoc25@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >My Orders</NavLink>
        </li>
        <li>
          <NavLink to='/my-account'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >My Account</NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Sign in</NavLink>
        </li>
        <li>
          🛒0
        </li>
      </ul>
    </nav>
  )
}

export { Navbar };