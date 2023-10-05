import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4';
  const {cartProducts} = useContext(ShoppingCartContext);

  return(
    <nav className='flex fixed top-0 z-10 w-full justify-between py-5 px-8 text-sm bg-[#00796B] text-white'>
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
          <NavLink to='/women-clothes'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Women's Clothing</NavLink>
        </li>
        <li>
          <NavLink to='/men-clothes'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Men's Clothing</NavLink>
        </li>
        <li>
          <NavLink to='/electronics'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Electronics</NavLink>
        </li>
        <li>
          <NavLink to='/jewelery'
          className={({isActive})=> isActive ? activeStyle : undefined}
          >Jewelery</NavLink>
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
        <li className='flex gap-2'>
          <ShoppingCartIcon className='w-6 h-6'/>
          {cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export { Navbar };