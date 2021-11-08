import React from 'react';
import { Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Mainpage() {
    return (
        <div>
    {/* <div id="preloder">
        <div className="loader"></div>
    </div> */}

    <div className="humberger__menu__overlay"></div>
    <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
            <a href="#/"><img src="folder/img/logo.png" alt="" /></a>
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
                <li className="active">Hoe</li>
                <li>Sshop</li>
                <li><a href="#/">Pages</a>
                    <ul className="header__menu__dropdown">
                        <li>Sho Detai</li>
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
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
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
                                    <li><a href="#/">Spanish</a></li>
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
                            <li className="active">Home</li>
                            <li><Link to="/shop">Shop</Link></li>
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
                        Shop
PAGES
BLOG
CONTACT  <li><a href="#/"><i className="fa fa-heart"></i> <span>1</span></a></li>
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
    <section className="categories">
        <div className="container">
            <div className="row">
                <div className="categories__slider owl-carousel">
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="folder/img/categories/cat-1.jpg" style={{ backgroundImage: "url('./folder/img/categories/cat-1.jpg')" }}>
                            <h5><a href="#/">Fresh Fruit</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="folder/img/categories/cat-2.jpg" style={{ backgroundImage: "url('./folder/img/categories/cat-2.jpg')" }}>
                            <h5><a href="#/">Dried Fruit</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="folder/img/categories/cat-3.jpg" style={{ backgroundImage: "url('./folder/img/categories/cat-3.jpg')" }}>
                            <h5><a href="#/">Vegetables</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="folder/img/categories/cat-4.jpg" style={{ backgroundImage: "url('./folder/img/categories/cat-4.jpg')" }}>
                            <h5><a href="#/">drink fruits</a></h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="categories__item set-bg" data-setbg="folder/img/categories/cat-5.jpg" style={{ backgroundImage: "url('./folder/img/categories/cat-5.jpg')" }}>
                            <h5><a href="#/">drink fruits</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row featured__filter">
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" style={{ backgroundImage: "url('./folder/img/featured/feature-1.jpg')" }}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#/">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" style={{ backgroundImage: "url('./folder/img/featured/feature-2.jpg')" }}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#/">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" style={{ backgroundImage: "url('./folder/img/featured/feature-3.jpg')" }}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#/">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" style={{ backgroundImage: "url('./folder/img/featured/feature-4.jpg')" }}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#/">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" style={{ backgroundImage: "url('./folder/img/featured/feature-5.jpg')" }}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#/">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" style={{ backgroundImage: "url('./folder/img/featured/feature-6.jpg')" }}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#/">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" style={{ backgroundImage: "url('./folder/img/featured/feature-7.jpg')" }}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#/">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" style={{ backgroundImage: "url('./folder/img/featured/feature-8.jpg')" }}>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#/"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#/"><i className="fa fa-retweet"></i></a></li>
                                <li><a href="#/"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#/">Crab Pool Security</a></h6>
                            <h5>$30.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src="folder/img/banner/banner-1.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src="folder/img/banner/banner-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="latest-product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Latest Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="#/" className="latest-product__item">
                                    <div className="latest-product__item__pic" style={{ backgroundImage: "url('./folder/img/latest-product/lp-1.jpg')" }}>
                                        {/* <img src="folder/img/latest-product/lp-1.jpg" alt="" /> */}
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
                                        <img src="folder/img/latest-product/lp-1.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#/" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="folder/img/latest-product/lp-2.jpg" alt="" style={{ backgroundImage: "url('./folder/img/latest-product/lp-2.jpg')" }} />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#/" className="latest-product__item">
                                    <div className="latest-product__item__pic" style={{ backgroundImage: "url('./folder/img/latest-product/lp-3.jpg')" }}>
                                        <img src="folder/img/latest-product/lp-3.jpg" alt="" />
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
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Top Rated Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="#/" className="latest-product__item">
                                    <div className="latest-product__item__pic" style={{ backgroundImage: "url('./folder/img/latest-product/lp-1.jpg')" }}>
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
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Review Products</h4>
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
                                        <img src="folder/img/latest-product/lp-2.jpg" alt="" style={{ backgroundImage: "url('./folder/img/latest-product/lp-2.jpg')" }}/>
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#/" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img alt="" />
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
                                        <img src="img/latest-product/lp-1.jpg" alt=""  />
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
                                        <img src="folder/img/latest-product/lp-3.jpg" alt="" style={{ backgroundImage: "url('./folder/img/latest-product/lp-3.jpg')" }} />
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
    </section>

    <section className="from-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title from-blog__title">
                        <h2>From The Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="folder/img/blog/blog-1.jpg" alt="" />
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#/">Cooking tips make cooking simple</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="folder/img/blog/blog-2.jpg" alt="" />
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#/">6 ways to prepare breakfast for 30</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="folder/img/blog/blog-3.jpg" alt="" />
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#/">Visit the clean farm in the US</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            <Footer></Footer>
        </div>
    );
}