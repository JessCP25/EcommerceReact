import { useContext } from "react"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"

const ShoppingCart = () => {
  const {openCheckoutSideMenu, closeProductDetail, cartProducts} = useContext(ShoppingCartContext);

  const openCheckout = () => {
    openCheckoutSideMenu();
    closeProductDetail();
  }

  return(
    <div className='relative flex gap-0.5 items-center'
    onClick={() => openCheckout()}>
      <ShoppingCartIcon className='w-6 h-6 fill-none stroke-white cursor-pointer'/>
      <div className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-[#009688] w-4 h-4 text-xs text-white'>
        {cartProducts.length}
      </div>
    </div>
  )
}

export {ShoppingCart};