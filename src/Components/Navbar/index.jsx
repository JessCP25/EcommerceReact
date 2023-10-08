import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { LocalStorage } from "../../LocalStorage";
import { ShoppingCart } from "../ShoppingCart";

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4';
  const {cartProducts, setSignOut, signOut} = useContext(ShoppingCartContext);

  // Sign out
  const signOutNav = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOutNav);
  const isUserSignOut = signOut || parsedSignOut;
  const [hasUserAnAccount, parsedAccount] = LocalStorage();

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    setSignOut(true);
  }

  const renderView = () => {
    if(hasUserAnAccount && !isUserSignOut){
      return (
        <>
          <li className='text-[#d8d8d8]/60'>
            {parsedAccount?.email}
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
            onClick={()=>handleSignOut()}
            >Sign out</NavLink>
          </li>
        </>
      )
    }else{
      return (
        <li>
          <NavLink to='/sign-in'
          className={({isActive})=> isActive ? activeStyle : undefined}
          onClick={()=>handleSignOut()}
          >Sign in</NavLink>
        </li>
      )
    }
  }

  return(
    <nav className='flex fixed top-0 z-10 w-full justify-between py-5 px-8 text-sm bg-[#00796B] text-white'>
      <ul className='flex items-center gap-3'>
        <li className='text-lg font-bold'>
          <NavLink to={`${isUserSignOut ? '/sign-in':'/'}`}>Shopi</NavLink>
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
        {renderView()}
        <li className='flex gap-2'>
          <ShoppingCart/>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar };