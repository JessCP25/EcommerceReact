import { useState } from "react";
import { useEffect } from "react";
import { apiUrl } from "../../api";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log(`Oh no, there is a error: ${error}`)
      }
    }
    fetchData();
  },[])
  return (
    <>
      <section className='grid gap-8 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item=>(
            <Card key={item.id} data={item}/>
          ))
        }
      </section>
      <ProductDetail/>
    </>
  );
}

export {Home};