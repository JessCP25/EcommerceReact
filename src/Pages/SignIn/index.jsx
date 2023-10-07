import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";

const SignIn = () => {
  const {account} = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info');
  // account
  const accountLocalStorage = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountLocalStorage);
  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const renderLogIn = () => {
    return (
      <>
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
      onClick={() => setView('create-user-info')}
      >Sign up</button>
      </>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <>Create</>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn();

  return (
    <div  className='w-[320px] text-center'>
      <h1 className='font-medium text-lg'>Welcome</h1>
      {renderView()}
    </div>
  )
}

export {SignIn}