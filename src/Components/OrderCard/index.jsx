import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const {title, imageUrl, price} = props;

  return (
    <div className='flex justify-between items-center bg-white rounded-lg'>
      <div className='flex items-center gap-2 w-2/3'>
        <figure className='w-[80px] h-[80px]'>
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <XMarkIcon className='w-6 h-6 cursor-pointer'/>
      </div>
    </div>
  );
}

export {OrderCard};