// import logo from './logo.svg';
import './App.css';
// import Products from './components/Products';
import Mainpage from './components/Mainpage';
import Shopgrid from './components/Shopgrid';
import Shopcart from './components/Shopcart';
import Loginpage from './login/Loginpage';
import Product from './components/Product';
import Signup from './login/Signup';
import React ,{ useState , useEffect} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const ParentContext = React.createContext();
function App() {

  const [cartItems, setCartItems] = useState([]);
  // const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadProducts();
  },[]);
  
  const loadProducts = async () => {
    const result = await axios.get("https://localhost/ci3/admin/ProductsController/products/");
    setItems(result.data);
    // setAllproducts(result.data);
    // console.log(items);
  }
  return (
    <Router>

          <Route exact path="/" component = {Loginpage} />
          <Route path ="/signup" component = {Signup} />
          <Route path ="/mainpage" component={Mainpage} />
          <ParentContext.Provider value={{ cartItems, setCartItems }}>
            <Route exact path = "/shop"><Shopgrid items={items} /></Route>
            <Route path = "/shoppingcart" component={Shopcart} />
            <Route path = "/shop/:product" ><Product items={items} /></Route>
          </ParentContext.Provider>
    </Router>
    // <Loginpage></Loginpage>
  );
}

export default App;
