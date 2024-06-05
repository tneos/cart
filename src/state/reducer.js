import {SAVE_INITIAL_PRICE, ADD_ONE, REMOVE_ONE, REMOVE_ITEM, CLEAR_BASKET} from "../actions";

const reducer = (state, action) => {
  if (action.type === SAVE_INITIAL_PRICE) {
    console.log(state, action);
    return {
      ...state,
      items: state.items.map(item => {
        return {...item, initialPrice: item.price};
      }),
    };
  }
  if (action.type === ADD_ONE) {
    return {
      ...state,
      items: state.items.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              amount: item.amount + 1,
              price: parseFloat(item.price, 10) + parseFloat(item.initialPrice, 10),
            }
          : {...item}
      ),
    };
  }
  if (action.type === REMOVE_ONE) {
    return {
      ...state,
      items: state.items.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              amount: item.amount > 0 ? item.amount - 1 : item.amount,
              price:
                item.amount > 1
                  ? parseFloat(item.price, 10) - parseFloat(item.initialPrice, 10)
                  : "0",
            }
          : {...item}
      ),
    };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      items: state.items.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              amount: 0,
              price: "0",
            }
          : {...item}
      ),
    };
  }

  if (action.type === CLEAR_BASKET) {
    return {
      ...state,
      items: [],
    };
  }

  return state;
};

export default reducer;
