import { ShoppingCartIcon, CurrencyDollarIcon, CalendarDaysIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const {date, totalPrice, totalProducts} = props;

  return (
    <div className='flex justify-between items-center bg-[#B2DFDB] rounded-lg p-3 shadow-lg w-[320px]'>
      <p className='flex flex-col font-medium gap-2'>
        <span className='flex gap-2'><CalendarDaysIcon className='w-6 h-6 text-[#00796B]'/>{date}</span>
        <span className='flex gap-2'><ShoppingCartIcon className='w-6 h-6 text-[#00796B]'/>{totalProducts}</span>
      </p>
      <p className='flex gap-3 text-lg font-medium'>
        <span className='flex gap-2'><CurrencyDollarIcon className='w-6 h-6 text-[#00796B]'/>${totalPrice}</span>
        <ChevronRightIcon className='w-6 h-6 text-[#00796B]'/>
      </p>
    </div>
  );
}

export {OrdersCard};