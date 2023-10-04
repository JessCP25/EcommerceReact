import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const {id,title, imageUrl, price, handleDelete} = props;

  return (
    <div className='flex justify-between items-center bg-[#B2DFDB] rounded-lg p-3 shadow-lg'>
      <div className='flex items-center gap-2'>
        <figure className='w-[80px] h-[80px] mx-auto'>
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className='text-medium font-light truncate w-24'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <XMarkIcon className='w-6 h-6 cursor-pointer'
        onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
}

export {OrderCard};