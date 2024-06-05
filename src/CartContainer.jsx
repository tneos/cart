import {AppContext} from "./state/AppState";
import {useContext} from "react";
import CartItem from "./CartItem";

const CartContainer = () => {
  const appContext = useContext(AppContext);
  const {items, clearBasket} = appContext;

  // Calculate total items
  const sum = items.reduce((acc, cur) => acc + parseFloat(cur.price, 10), 0);

  if (items.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {items.map(
          cartItem => cartItem.amount > 0 && <CartItem key={cartItem.id} {...cartItem} />
        )}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${sum}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={() => clearBasket()}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
