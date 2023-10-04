import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";

const CheckoutSideMenu = () => {
  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts} = useContext(ShoppingCartContext);

  return(
    <aside className={`${isCheckoutSideMenuOpen?'flex':'hidden'} flex flex-col fixed right-0 top-[68px] rounded-tl-lg rounded-bl-lg shadow-lg bg-[#dddcdc] border-2 border-[#9E9E9E] w-[360px] h-[calc(100vh-68px)] py-3 px-5 overflow-y-auto`}>
      <div className='flex justify-between font-medium text-xl text-[#212121]'>
        <h2>My order</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer'
          onClick={()=>closeCheckoutSideMenu()}
        />
      </div>
      <div className='flex flex-col gap-3 my-4'>
        {
          cartProducts.map((product)=>(
            <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            />
          ))
        }
      </div>
    </aside>
  )
}

export {CheckoutSideMenu};