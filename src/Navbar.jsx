import {FaCartPlus} from "react-icons/fa";
import {AppContext} from "./state/AppState";
import {useContext} from "react";
const Navbar = () => {
  const appContext = useContext(AppContext);
  const {items} = appContext;

  // Calculate total items
  const sum = items.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{sum}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
