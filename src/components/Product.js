import React ,{ useContext } from 'react';
import {useParams} from 'react-router-dom';
import { ParentContext } from "../App";
import { Link } from 'react-router-dom';


const Product =({items}) => {

    const { cartItems,setCartItems } = useContext(ParentContext);
    const {product} = useParams();
    const url = "https://localhost/ci3/uploads/";

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, {...product,qty:1}]);
        }
      };

    return(
        <div>
            {items.filter(x => x.name === product).map((x)=>(
                <div className="full-card" key={x.id}>
                    <img src={url+x.image} alt="" />
                    <h1>{x.name}</h1>
                    <p>${x.price}</p>
                    <button className="site-btn" onClick={() => onAdd(x)}>Add to cart </button>
                    <Link to="/shop" className="primary-btn cart-btn">Back to Shop</Link></div>
            ))}
        </div>
    )
}

export default Product;