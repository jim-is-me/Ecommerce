import React,{useContext} from "react";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import { ParentContext } from "../App";



export default function Shopcart () {
    

    const { cartItems,setCartItems } = useContext(ParentContext);
    // props.location.aboutProps.data.map(x=>{
    // setCartItems(props.location.aboutProps.data[0].name);

    // ON CLICKING + icon ADDS THE QTY OF THE PRODUCT

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };

      // ON CLICKING - icon MINUS THE QTY OF THE PRODUCT

      const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };

      //   X button TO REMOVE THE PRODUCT FROM CART

      const remove = (product) => {
        // const exist = cartItems.find((x) => x.id === product.id);
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      }
    
      //   CALCULATES THE TOTAL PRICE
      
      const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);



    return(
        <div>
               <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <a href="#/"><img src="img/logo.png" alt="" /></a>
        </div>
        <div className="humberger__menu__cart">
            <ul>
                <li><a href="#/"><i className="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="#/"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
            </ul>
            <div className="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div className="humberger__menu__widget">
            <div className="header__top__right__language">
                <img src="folder/img/language.png" alt="" />
                <div>English</div>
                <span className="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#/">Spanis</a></li>
                    <li><a href="#/">English</a></li>
                </ul>
            </div>
            <div className="header__top__right__auth">
                <a href="#/"><i className="fa fa-user"></i> Login</a>
            </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
            <ul>
                <li className="active"><a href="./index.html">Home</a></li>
                <li><a href="./shop-grid.html">Shop</a></li>
                <li><a href="#/">Pages</a>
                    <ul className="header__menu__dropdown">
                        <li><a href="./shop-details.html">Shop Details</a></li>
                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="./checkout.html">Check Out</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
            <a href="#/"><i className="fa fa-facebook"></i></a>
            <a href="#/"><i className="fa fa-twitter"></i></a>
            <a href="#/"><i className="fa fa-linkedin"></i></a>
            <a href="#/"><i className="fa fa-pinterest-p"></i></a>
        </div>
        <div className="humberger__menu__contact">
            <ul>
                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
    </div>

    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="header__top__right">
                            <div className="header__top__right__social">
                                <a href="#/"><i className="fa fa-facebook"></i></a>
                                <a href="#/"><i className="fa fa-twitter"></i></a>
                                <a href="#/"><i className="fa fa-linkedin"></i></a>
                                <a href="#/"><i className="fa fa-pinterest-p"></i></a>
                            </div>
                            <div className="header__top__right__language">
                                {/* <img src="folder/img/language.png" alt="" /> */}
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#/">Spanis</a></li>
                                    <li><a href="#/">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <Link to="/"><i className="fa fa-user"></i> Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="folder/img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu">
                        <ul>
                            <li><Link to="/mainpage">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><a href="#/">Pages</a>
                                <ul className="header__menu__dropdown">
                                    <li>Shop Details</li>
                                    <li>Shoping Cart</li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a href="#/"><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="#/"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>

    <section className="hero hero-normal">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="#/">Fresh Meat</a></li>
                            <li><a href="#/">Vegetables</a></li>
                            <li><a href="#/">Fruit and Nut Gifts</a></li>
                            <li><a href="#/">Fresh Berries</a></li>
                            <li><a href="#/">Ocean Foods</a></li>
                            <li><a href="#/">Butter and Eggs</a></li>
                            <li><a href="#/">Fastfood</a></li>
                            <li><a href="#/">Fresh Onion</a></li>
                            <li><a href="#/">Papayaya and Crisps</a></li>
                            <li><a href="#/">Oatmeal</a></li>
                            <li><a href="#/">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#/">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?" />
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg" style={{ backgroundImage: "url('./folder/img/breadcrumb.jpg')" }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Shopping Cart</h2>
                        <div className="breadcrumb__option">
                            <a href="./index.html">Home</a>
                            <span>Shopping Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="shoping-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {/* LOOPING THE CART ITEMS */}

                                {cartItems.length === 0 && <tr><td colSpan="4"><h4>Cart is empty</h4></td></tr>}
                                {cartItems.map((product,index) => {
                                    
                                    let cost =  product.price * product.qty;
                                    

                                    return (
                                        <tr key={index}>
                                            <td className="shoping__cart__item">
                                                <img src={"https://localhost/ci3/uploads/"+product.image} alt="" />
                                                <h5>{product.name}</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                ${product.price}
                                            </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <button onClick={() => onRemove(product)} className="remove">
                                                            -
                                                        </button>{product.qty}
                                                        <button onClick={() => onAdd(product)} className="add">
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                ${cost}
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close" onClick={() => remove(product)} ></span>
                                            </td>
                                            <td className="shoping__cart__total">
                                            </td>
                                        </tr>
                                            );
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <Link to="/shop" className="primary-btn cart-btn">CONTINUE SHOPPING</Link>
                        <a href="#/" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Total <span>${itemsPrice}</span></li>
                        </ul>
                        <a href="#/" className="primary-btn">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

            <Footer></Footer>

        </div>
    );
}