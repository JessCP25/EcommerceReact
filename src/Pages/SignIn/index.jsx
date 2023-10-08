import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { ShoppingCartContext } from "../../Context";

const SignIn = () => {
  const {account} = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info');
  const form = useRef(null);
  // account
  const accountLocalStorage = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountLocalStorage);
  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const createAnAccount = () => {
    const formData = new formData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }


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

        <form className='w-full mt-7 mb-4 text-start'>
          <label htmlFor='name'>Your name:</label>
          <input required className='border-2 border-[#212121] rounded-lg w-full px-3 mb-5 mt-1 py-2 focus:outline-[#009688]'
          type="text" id='name'
          placeholder='Peter'/>
          <label htmlFor='email'>Your email:</label>
          <input required
          className='border-2 border-[#212121] rounded-lg w-full px-3 mb-5 mt-1 py-2 focus:outline-[#009688]'
          type="email" id='email'
          placeholder='micorreo@gmail.com'
          />
          <label htmlFor='password'>Your password:</label>
          <input required
          className='border-2 border-[#212121] rounded-lg w-full px-3 mb-5 mt-1 py-2 focus:outline-[#009688]'
          type="password" id='password'
          placeholder='********'
          />
          <Link>
            <button
            className='w-full bg-[#009688] text-white rounded-lg mb-3 py-3 font-medium'
            onClick={() => createAnAccount()}>
              Create
            </button>
          </Link>
        </form>

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