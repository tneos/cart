import {createContext, useReducer} from "react";
import reducer from "./reducer";
import {ADD_ONE, REMOVE_ONE, REMOVE_ITEM, CLEAR_BASKET, SAVE_INITIAL_PRICE} from "../actions";
import cartItems from "../data";

export const AppContext = createContext();

export const AppState = ({children}) => {
  const initialState = {
    items: cartItems,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Initial price saved as new property
  const savePrice = () => dispatch({type: SAVE_INITIAL_PRICE});

  // Add one
  const addOne = id => dispatch({type: ADD_ONE, payload: {id}});

  // Remove one
  const removeOne = id => dispatch({type: REMOVE_ONE, payload: {id}});

  // Remove item
  const removeItem = id => dispatch({type: REMOVE_ITEM, payload: {id}});

  // Clear basket
  const clearBasket = () => dispatch({type: CLEAR_BASKET});

  return (
    <AppContext.Provider
      value={{
        items: state.items,
        basket: state.basket,
        savePrice,
        addOne,
        removeOne,
        removeItem,
        clearBasket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
