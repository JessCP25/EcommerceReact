import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu} = useContext(ShoppingCartContext);

  return(
    <aside className={`${isCheckoutSideMenuOpen?'flex':'hidden'} flex flex-col fixed right-0 top-[68px] rounded-tl-lg rounded-bl-lg shadow-lg bg-[#dddcdc] border-2 border-[#9E9E9E] w-[360px] h-[calc(100vh-68px)] py-3 px-5 overflow-y-auto`}>
      <div className='flex justify-between font-medium text-xl text-[#212121]'>
        <h2>My order</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer'
          onClick={()=>closeCheckoutSideMenu()}
        />
      </div>
    </aside>
  )
}

export {CheckoutSideMenu};