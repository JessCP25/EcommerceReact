import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const {isProductDetailOpen, closeProductDetail} = useContext(ShoppingCartContext);

  return(
    <aside className={`${isProductDetailOpen?'flex':'hidden'} flex flex-col fixed right-0 top-[68px] rounded-lg shadow-lg bg-white border-black w-[360px] h-[calc(100vh-68px)] p-5`}>
      <div className='flex justify-between font-medium text-lg'>
        <h2>Detail</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer'
          onClick={()=>closeProductDetail()}
        />
      </div>
    </aside>
  )
}

export {ProductDetail};