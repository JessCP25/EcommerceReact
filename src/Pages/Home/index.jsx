import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";

const Home = () => {
  const {items, setSearchByTitle, filteredItems, SearchByTitle, getCategory} = useContext(ShoppingCartContext);

  let currentPathCategory = window.location.pathname.slice(1);

  let category = getCategory(currentPathCategory);

  console.log(category)



  const renderView = ()=>{
    if(filteredItems?.length > 0){
      if(category){
        return (
          filteredItems?.filter(item => item.category === category).map((item)=>(
            <Card key={item.id} data = {item}/>
          ))
        )
      }else{
        return (
          filteredItems?.map((item)=>(
            <Card key={item.id} data = {item}/>
          ))
        )
      }
    }else{
      return(
        <div>We don't have anything</div>
      )
    }
  }

  // const renderView = () => {
  //   const itemsToRender = searchByTitle?.length > 0 ? filteredItems : items;
  //   if(itemsToRender?.length>0){
  //     return (
  //       itemsToRender?.map(item=>(
  //         <Card key={item.id} data={item}/>
  //       ))
  //     )
  //   }else{
  //     return <p className='text-center'>No Results Found</p>
  //   }
  // }

  return (
    <>
      <h1 className='font-semibold text-xl'>Exclusive Products</h1>
      <input type="text"
      placeholder='Search product...'
      className='rounded-lg border-2 border-[#212121] w-80 px-3 py-2 mt-3 mb-5 focus:outline-[#009688]'
      value={SearchByTitle}
      onChange={(event)=>setSearchByTitle(event.target.value)}
      />
      <section className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
        {
          renderView()
        }
      </section>
      <ProductDetail/>
    </>
  );
}

export {Home};