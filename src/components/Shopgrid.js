import React ,{ useEffect, useState ,useContext } from "react";
import { Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Toast from 'react-bootstrap/Toast';
// import ToastHeader from 'react-bootstrap/ToastHeader';
// import ToastBody from 'react-bootstrap/ToastBody';
import axios from "axios";
import { ParentContext } from "../App";
import '../css/shop.css';
 

export default function  Shopgrid({items}) {

    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const { cartItems,setCartItems } = useContext(ParentContext);
    const [allproducts, setAllproducts] = useState([]);

    const url = "https://localhost/ci3/uploads/";
    // setProducts(items);
    // setAllproducts(items);
    
    // useEffect HOOK TO MAKE API CALLS

    console.log('items',items);

    useEffect(() => {

        const loadCategorys = async () => {
            const result = await axios.get("https://localhost/ci3/admin/CategoryController/categorys/");
            setCategorys(result.data);
            setProducts(items);
            console.log('products',items);
            setAllproducts(items);
            console.log(products);
        }
        // loadProducts();
        loadCategorys();

        
    }, [items]);
    
    // let category = "";

    // FILTERS THE CATEGORY BASED ON THE SELECTED CATEGORY

    const selectcat = e => {
      
        if(e.target.value === "All")
            setProducts(allproducts);
        else{
            setProducts(allproducts.filter((x) => x.cname === e.target.value));
        }
            console.log(products);
    };


    // GET REQUEST TO LOAD PRODUCTS

    // const loadProducts = async () => {
    //     // const result = await axios.get("https://localhost/ci3/admin/ProductsController/products/");
    //     setProducts(items);
    //     setAllproducts(items);
       
    //     // console.log(products);
    //         console.log(items);


    // }
     
    // GET REQUEST TO LOAD CATEGORYS


    



    // FUNCTION THAT HANDLES PRODUCT ADDING TO THE CART

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
      toggleShowA()
    };

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    return(
        <div>
                        {/* <div id="preloder">
                <div className="loader"></div>
            </div> */}

        

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
                        <img src="img/language.png" alt="" />
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
                        <li>Homed</li>
                        <li><a href="./shop-grid.html">hhShop</a></li>
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
                                        {/* <img src="img/language.png" alt="" /> */}
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
                                <a href="./index.html"><img src="folder/img/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li><Link to="/mainpage">Home</Link></li>
                                    <li className="active">Shop</li>
                                    <li><a href="#/">Pages</a>
                                        <ul className="header__menu__dropdown">
                                            <li>Shop Details</li>
                                            <li><Link to="/shoppingcart">Shoping Cart</Link></li>
                                            <li>Check Out</li>
                                            <li>Blog Details</li>
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

            <Navbar />
            <section className="breadcrumb-section set-bg" data-setbg="folder/img/breadcrumb.jpg" style={{ backgroundImage: "url('./folder/img/breadcrumb.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Organi Shop</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <div className="sidebar__item">
                                    <h4>Department</h4>
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
                                    </ul>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Price</h4>
                                    <div className="price-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="10" data-max="540">
                                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                                            <span className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            <span className="ui-slider-handle ui-corner-all ui-state-default"></span>
                                        </div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__item sidebar__item__color--option">
                                    <h4>Colors</h4>
                                    <div className="sidebar__item__color sidebar__item__color--white">
                                        <label htmlFor="white">
                                            White
                                            <input type="radio" id="white" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--gray">
                                        <label htmlFor="gray">
                                            Gray
                                            <input type="radio" id="gray" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--red">
                                        <label htmlFor="red">
                                            Red
                                            <input type="radio" id="red" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--black">
                                        <label htmlFor="black">
                                            Black
                                            <input type="radio" id="black" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--blue">
                                        <label htmlFor="blue">
                                            Blue
                                            <input type="radio" id="blue" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--green">
                                        <label htmlFor="green">
                                            Green
                                            <input type="radio" id="green" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Popular Size</h4>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="large">
                                            Large
                                            <input type="radio" id="large" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="medium">
                                            Medium
                                            <input type="radio" id="medium" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="small">
                                            Small
                                            <input type="radio" id="small" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="tiny">
                                            Tiny
                                            <input type="radio" id="tiny" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <h4>Latest Products</h4>
                                        <div className="latest-product__slider owl-carousel">
                                            <div className="latest-prdouct__slider__item">
                                                <a href="#/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="folder/img/latest-product/lp-1.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="folder/img/latest-product/lp-2.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="folder/img/latest-product/lp-3.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="#/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-1.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-2.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#/" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="img/latest-product/lp-3.jpg" alt="" />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="product__discount">
                                <div className="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                                <div className="row">
                                    <div className="product__discount__slider owl-carousel">
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="folder/img/product/discount/pd-1.jpg" style={{ backgroundImage: "url('./folder/img/product/discount/pd-1.jpg')" }}>
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#/">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="img/product/discount/pd-2.jpg" style={{ backgroundImage: "url('./folder/img/product/discount/pd-2.jpg')" }}>
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Vegetables</span>
                                                    <h5><a href="#/">Vegetables’package</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="img/product/discount/pd-3.jpg" style={{ backgroundImage: "url('./folder/img/product/discount/pd-3.jpg')" }}>
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#/">Mixed Fruitss</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="img/product/discount/pd-4.jpg" style={{ backgroundImage: "url('./folder/img/product/discount/pd-4.jpg')" }}>
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#/">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="img/product/discount/pd-5.jpg" style={{ backgroundImage: "url('./folder/img/product/discount/pd-5.jpg')" }}>
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#/">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg"
                                                    data-setbg="img/product/discount/pd-6.jpg" style={{ backgroundImage: "url('./folder/img/product/discount/pd-6.jpg')" }}>
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#/">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="filter__sort">
                                            <span>Sort By</span>
                                             <select onChange={selectcat}>
                                                <option value="All">All</option>
                                                {categorys.map((cat,index)=>{
                                                    return(
                                                        <option key={index} value={cat.name} >{cat.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6><span>{products.length}</span> Products found</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Toast appears when we add a product by clicking the cart icon */}
                            <Toast show={showA} onClose={toggleShowA} animation={false}>
                                <Toast.Header>
                                    <strong className="me-auto">Product added to cart</strong>
                                </Toast.Header>
                                <Toast.Body>Click <Link to={{
                                                        pathname:"/shoppingcart" 
                                                    }}><strong>here </strong></Link>to go to cart</Toast.Body>
                            </Toast>

                            {/* LOOPING PRODUCTS */}
                            <div className="row">
                                {products.map((product,index) => {
                                   
                                    return (
                                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                                <div className="product__item">
                                                    <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg" style={{ backgroundImage: `url(${url+product.image})` }}>
                                                    {/* "url('./folder/img/product/product-11.jpg')" */}
                                                        <ul className="product__item__pic__hover">
                                                            <li><i className="fa fa-heart"></i></li>
                                                            <li><i className="fa fa-retweet"></i></li>
                                                            <li><i className="fa fa-shopping-cart" onClick={() => onAdd(product)}></i></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6><Link to={`/shop/${product.name}`}>{product.name}</Link></h6>
                                                        <h5>${product.price}</h5>
                                                        <button className="site-btn" onClick={() => onAdd(product)}>Add to cart </button>
                                                    </div>
                                                    {/* <img src={"https://localhost/ci3/"+product.image} alt="hi" /> */}
                                                </div>
                                            </div> 
                                            );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}


{/* <Select options={categorys} onChange={selectcat} />  */}