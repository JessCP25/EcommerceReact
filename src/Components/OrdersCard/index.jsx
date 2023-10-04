import { ShoppingCartIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const {totalPrice, totalProducts} = props;

  return (
    <div className='flex justify-between items-center bg-[#B2DFDB] rounded-lg p-3 shadow-lg'>
      <p className='w-[320px] flex justify-between font-medium'>
        <span className='flex gap-2'><ShoppingCartIcon className='w-6 h-6 text-[#00796B]'/>{totalProducts}</span>
        <span className='flex gap-2'><CurrencyDollarIcon className='w-6 h-6 text-[#00796B]'/>${totalPrice}</span>
      </p>
    </div>
  );
}

export {OrdersCard};