import { useContext } from "react";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const {order} = useContext(ShoppingCartContext);
  return(
    <>
      <h1>MyOrders</h1>
      <div className='flex flex-col gap-4 my-5'>
        {
          order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index+1}`}>
              <OrdersCard key={order.id} totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export {MyOrders};