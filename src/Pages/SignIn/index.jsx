import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const SignIn = () => {
  const {account} = useContext(ShoppingCartContext);
  // account
  const accountLocalStorage = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountLocalStorage);
  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  return (
    <div  className='w-[320px] text-center'>
      <div className='font-medium text-lg'>Welcome</div>
      <div className='w-full mt-7 mb-4 text-start'>
        <p>
          <span>Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span>Password:</span>
          <span>{parsedAccount?.password}</span>
        </p>
      </div>
      <Link to={'/'}>
        <button className='w-full font-medium disabled:bg-[#757575] bg-[#009688] text-white rounded-lg mb-3 py-3'
        disabled={!hasUserAnAccount}
        >Log in</button>
      </Link>
      <button className='w-full font-medium disabled:text-[#757575] disabled:border-[#757575] border-2 border-[#009688] text-[#009688] rounded-lg mb-3 py-3'
      disabled={hasUserAnAccount}
      >Sign up</button>
    </div>
  )
}

export {SignIn}