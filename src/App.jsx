// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import {AppContext} from "./state/AppState";
import {useContext, useEffect} from "react";

function App() {
  const appContext = useContext(AppContext);
  const {savePrice} = appContext;

  useEffect(() => {
    savePrice();
  }, []);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
