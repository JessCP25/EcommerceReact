import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import { Layout } from '../../Components/Layout'
import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage } from '../../Context'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import { LocalStorage } from '../../LocalStorage'
import { useContext } from 'react'

const AppRoutes = () => {
  const [hasUserAnAccount, _] = LocalStorage();
  const {signOut} = useContext(ShoppingCartContext);

  // sign - out
  const signOutLocalStorage = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOutLocalStorage);
  const isUserSignOut = signOut || parsedSignOut;

  const verifiedAccountForShowHome = hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />;

  let routes = useRoutes([
    {path: '/', element: verifiedAccountForShowHome},
    {path: '/:category', element: verifiedAccountForShowHome},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-order/last', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-order/:id', element: <MyOrder/>},
    {path: '/*', element: <NotFound/>},
    {path: '/sign-in', element: <SignIn/>}
  ])
  return routes;
}

const App = () => {
  initializeLocalStorage()
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        <Layout>
          <AppRoutes/>
        </Layout>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
