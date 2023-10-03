const Card = ({data}) => {
  return (
    <div className='bg-[#B2DFDB] cursor-pointer w-56 h-60 rounded-lg shadow-xl'>
      <figure className='relative w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-[#212121]/60 rounded-lg m-2 text-xs px-2 py-0.5 text-white'>{data.category}</span>
        <img className='object-cover h-full w-full rounded-tr-lg rounded-tl-lg' src={data.image} alt={data.title} />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-[#009688] w-7 h-7 rounded-full m-2 text-white shadow-xl'>+</div>
      </figure>
      <div className='text-[#212121] flex justify-between px-4 items-center h-1/5'>
        <span className='text-sm truncate'>{data.title}</span>
        <span className='font-bold'>${data.price}</span>
      </div>
    </div>
  )
}

export {Card};