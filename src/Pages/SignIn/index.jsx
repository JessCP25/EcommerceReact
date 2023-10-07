import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div  className='w-[320px] text-center'>
      <div className='font-medium text-lg'>Welcome</div>
      <div className='w-full mt-7 mb-4 text-start'>
        <p>
          <span>Email:</span>
          <span>jesscp25@gmail.com</span>
        </p>
        <p>
          <span>Password:</span>
          <span>*********</span>
        </p>
      </div>
      <Link to={'/'}>
        <button className='w-full bg-[#009688] text-white rounded-lg mb-3 py-3'>Log in</button>
      </Link>
      <button className='w-full border-2 border-[#009688] text-[#009688] rounded-lg mb-3 py-3'>Sign up</button>
    </div>
  )
}

export {SignIn}