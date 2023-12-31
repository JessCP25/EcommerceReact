import { useContext } from "react";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const {order} = useContext(ShoppingCartContext);
  return(
    <>
      <h1 className='font-medium'>MyOrders</h1>
      <div className='flex flex-col gap-4 my-5'>
        {
          order.map((order, index) => (
            <Link key={index} to={`/my-order/${index}`}>
              <OrdersCard key={order.id} date={order.date} totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export {MyOrders};