import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, setCount, count, order, setOrder} = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(filteredProducts);
    setCount(count - 1);
  }

  const handleCheckout = () => {
    const date = new Date();
    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    }

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setCount(0);
    console.log(order);
    closeCheckoutSideMenu();
  }

  return(
    <aside className={`${isCheckoutSideMenuOpen?'flex':'hidden'} flex flex-col fixed right-0 top-[68px] rounded-tl-lg rounded-bl-lg shadow-lg bg-white border-2 border-[#009688] w-[360px] h-[calc(100vh-68px)] py-4 px-5 overflow-y-auto`}>
      <div className='flex justify-between font-medium text-xl text-[#212121]'>
        <h2>My order</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer'
          onClick={()=>closeCheckoutSideMenu()}
        />
      </div>
      <div className='flex flex-col gap-4 my-4 flex-1'>
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
      <Link to={'./my-order/last'}>
        <button onClick={handleCheckout}
        className='bg-[#009688] text-white py-3 font-bold rounded-lg mt-3 w-full'
        >Checkout</button>
      </Link>
    </aside>
  )
}

export {CheckoutSideMenu};