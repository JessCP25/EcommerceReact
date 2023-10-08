import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

const LocalStorage = () => {
  const {account} = useContext(ShoppingCartContext);

  // account
  const accountLocalStorage = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountLocalStorage);
  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  return [hasUserAnAccount, parsedAccount];
}

export { LocalStorage};