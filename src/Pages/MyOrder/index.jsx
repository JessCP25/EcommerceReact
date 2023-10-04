import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const {order} = useContext(ShoppingCartContext);
  let currentPath = window.location.pathname;
  let index = currentPath.split('/').pop();
  if(index === 'last') index = order?.length-1;

  return(
    <>
      <div className='relative w-[350px] flex justify-center'>
        <Link to={'/my-orders'}>
          <ChevronLeftIcon className='w-6 h-6 text-black absolute left-0 cursor-pointer'/>
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className='flex flex-col gap-4 my-4 w-[350px]'>
        {
          order?.[index]?.products.map((product)=>(
            <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            />
          ))
        }
      </div>
    </>
    )
}

export {MyOrder};