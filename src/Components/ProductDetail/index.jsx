import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext);

  return(
    <aside className={`${isProductDetailOpen?'flex':'hidden'} flex flex-col fixed right-0 top-[68px] rounded-tl-lg rounded-bl-lg shadow-lg bg-white border-2 border-[#009688] w-[360px] h-[calc(100vh-68px)] py-3 px-5 overflow-y-auto`}>
      <div className='flex justify-between font-medium text-xl text-[#212121]'>
        <h2>Detail</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer'
          onClick={()=>closeProductDetail()}
        />
      </div>
      <figure className='my-3'>
        <img
        className='rounded-lg'
        src={productToShow.image} alt={productToShow.title} />
      </figure>
      <p className='flex flex-col'>
        <span className='font-bold text-xl pb-2 text-[#00796B]'>${productToShow.price}</span>
        <span className='font-medium text-base text-[#00796B]'>{productToShow.title}</span>
        <span className='font-light text-base text-[#212121]'>{productToShow.description}</span>
      </p>
    </aside>
  )
}

export {ProductDetail};