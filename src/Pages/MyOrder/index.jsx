import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

const MyOrder = () => {
  const {order} = useContext(ShoppingCartContext);
  return(
    <>
      <h2>MyOrder</h2>
      <div className='flex flex-col gap-4 my-4 flex-1'>
        {
          order?.slice(-1)[0]?.products.map((product)=>(
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