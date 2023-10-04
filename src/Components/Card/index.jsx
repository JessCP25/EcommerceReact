import { useContext } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Card = ({data}) => {
  const {count, setCount, openProductDetail,setProductToShow} = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  }

  return (
    <div className='bg-[#B2DFDB] cursor-pointer w-56 h-60 rounded-lg shadow-xl'
    onClick={() => showProduct(data)}
    >
      <figure className='relative w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-[#212121]/80 rounded-lg m-2 text-xs px-2 py-0.5 text-white'>{data.category}</span>
        <img className='object-cover h-full w-full rounded-tr-lg rounded-tl-lg' src={data.image} alt={data.title} />
        <div className='absolute top-1 right-1 flex justify-center items-center bg-white w-7 h-7 rounded-full m-2 text-white shadow-xl'
        onClick={(e)=>{
          e.stopPropagation();
          setCount(count+1)}}
        >
          <PlusCircleIcon className='absolute top-0 right-0 w-9 h-9 text-[#009688] m-[-4px]'/>
        </div>
      </figure>
      <div className='text-[#212121] flex justify-between px-4 items-center h-1/5'>
        <span className='text-sm truncate'>{data.title}</span>
        <span className='font-bold'>${data.price}</span>
      </div>
    </div>
  )
}

export {Card};