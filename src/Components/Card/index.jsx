const Card = () => {
  return (
    <div className='bg-[#B2DFDB] cursor-pointer w-56 h-60 rounded-lg shadow-xl'>
      <figure className='relative w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-[#212121]/60 rounded-lg m-2 text-xs px-2 py-0.5 text-white'>Electronics</span>
        <img className='object-cover h-full w-full rounded-tr-lg rounded-tl-lg' src='https://img.freepik.com/foto-gratis/auriculares-sobre-fondo-brillante_23-2147781751.jpg?w=740&t=st=1696352945~exp=1696353545~hmac=c1d885473e6c291cc1fbf1af434e6728bf2590151ed4562000ef890e64b01c8d' alt='' />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-[#009688] w-7 h-7 rounded-full m-2 text-white shadow-xl'>+</div>
      </figure>
      <div className='text-[#212121] flex justify-between px-4 items-center h-1/5'>
        <span className='text-sm'>Headphones</span>
        <span className='font-bold'>$300</span>
      </div>
    </div>
  )
}

export {Card};