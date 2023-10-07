const SignUp = () => {
  return (
    <div  className='w-[320px] text-center'>
      <div className='font-medium text-lg'>Welcome</div>
      <form className='w-full mt-7 mb-4 text-start'>
        <label htmlFor='name'>Your name:</label>
        <input required className='border-2 border-[#212121] rounded-lg w-full px-3 mb-5 mt-1 py-2 focus:outline-[#009688]' type="text" id='name'/>
        <label htmlFor='email'>Your email:</label>
        <input required className='border-2 border-[#212121] rounded-lg w-full px-3 mb-5 mt-1 py-2 focus:outline-[#009688]' type="email" id='email'/>
        <label htmlFor='password'>Your password:</label>
        <input required className='border-2 border-[#212121] rounded-lg w-full px-3 mb-5 mt-1 py-2 focus:outline-[#009688]' type="password" id='password'/>
        <input className='w-full bg-[#009688] text-white rounded-lg mb-3 py-3 font-medium' type="submit" value="Submit" />
      </form>
    </div>
  );
}

export {SignUp};