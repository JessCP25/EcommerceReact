import { createContext, useState, useEffect } from "react";
import { apiUrl } from "../api";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) => {
  // ShoppingCart - Quantity
  const [count, setCount] = useState(0);
  // ShoppingCart - Add Product
  const [cartProducts, setCartProducts] = useState([]);
  // ProductDetail Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // ProductDetail - Show
  const [productToShow, setProductToShow] = useState({});
  // CheckoutSideMenu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  // CheckoutSideMenu - AddOrder
  const [order, setOrder] = useState([]);
  // getProducts
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

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

  // SearchProduct - ByTitle
  const [searchByTitle, setSearchByTitle] = useState('');
  
  const filteredByTitle = (items, searchByTitle) => {
    return items.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }

  useEffect(()=>{
    setFilteredItems(filteredByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  const getCategory = (urlCategory) => {
    let category = '';
    switch (urlCategory) {
      case 'women-clothes':
        category = "women's clothing";
        break;
      case 'men-clothes':
        category = "men's clothing";
        break;
      case 'electronics':
        category = "electronics";
        break;
      case 'jewelery':
        category = "jewelery";
        break;
    }
    return category;
  }

  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      getCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export {ShoppingCartContext, ShoppingCartProvider};