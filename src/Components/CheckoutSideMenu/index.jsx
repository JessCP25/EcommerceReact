import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, setCount, count} = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(filteredProducts);
    setCount(count - 1);
  }

  return(
    <aside className={`${isCheckoutSideMenuOpen?'flex':'hidden'} flex flex-col fixed right-0 top-[68px] rounded-tl-lg rounded-bl-lg shadow-lg bg-white border-2 border-[#009688] w-[360px] h-[calc(100vh-68px)] py-4 px-5 overflow-y-auto`}>
      <div className='flex justify-between font-medium text-xl text-[#212121]'>
        <h2>My order</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer'
          onClick={()=>closeCheckoutSideMenu()}
        />
      </div>
      <div className='flex flex-col gap-4 my-4'>
        {
          cartProducts.map((product)=>(
            <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div>
        <p className='flex justify-between text-lg font-bold text-[#00796B] mt-3 px-3'>
          <span>Total:</span>
          <span>${totalPrice(cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export {CheckoutSideMenu};