import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
// import FilterContext from "../../../helpers/filter/FilterContext";
import ProductItem from "../products/product-box";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";
import PostLoader from "../common/post-loader";
import CartContext from "../../helpers/cart";
import { WishlistContext } from "../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../helpers/Compare/CompareContext";
import { useLocation } from "react-router-dom";
import { productList } from "../constant/product-list";

const ProductList = ({ colClass, layoutList, openSidebar, noSidebar }) => {
    const cartContext = useContext(CartContext);
    const quantity = cartContext.quantity;
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const [limit, setLimit] = useState(8);
    const curContext = useContext(CurrencyContext);
    const [grid, setGrid] = useState(colClass);
    const symbol = curContext.state.symbol;
    // const filterContext = useContext(FilterContext);
    // const selectedBrands = filterContext.selectedBrands;
    // const selectedColor = filterContext.selectedColor;
    // const selectedPrice = filterContext.selectedPrice;
    // const selectedCategory = filterContext.state;
    // const selectedSize = filterContext.selectedSize;
    const [sortBy, setSortBy] = useState("AscOrder");
    const [isLoading, setIsLoading] = useState(false);
    const [layout, setLayout] = useState(layoutList);
    const [url, setUrl] = useState();
    const location = useLocation()


    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    // useEffect(() => {
    //     const pathname = location.pathname;
    //     setUrl(pathname);
    //     router.push(
    //         `${pathname}?${filterContext.state}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}`, undefined, { shallow: true }
    //     );
    // }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);




    // const removeBrand = (val) => {
    //     const temp = [...selectedBrands];
    //     temp.splice(selectedBrands.indexOf(val), 1);
    //     filterContext.setSelectedBrands(temp);
    // };

    // const removeSize = (val) => {
    //     const temp = [...selectedSize];
    //     temp.splice(selectedSize.indexOf(val), 1);
    //     filterContext.setSelectedSize(temp);
    // };

    // const removeColor = () => {
    //     filterContext.setSelectedColor("");
    // };

    return (
        <Col className="collection-content">
            <div className="page-main-content">
                <Row>
                    <Col sm="12">
                        <div className="top-banner-wrapper">
                            <a href={null}>
                                <Media
                                    src='/assets/images/mega-menu/2.jpg'
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </a>
                            <div className="top-banner-content small-section">
                                <h4>fashion</h4>
                                <h5>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but
                                    also the leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <Row>
                            <Col xs="12">
                                <ul className="product-filter-tags">
                                    {/* {selectedBrands.map((brand, i) => (
                                        <li key={i}>
                                            <a href={null} className="filter_tag">
                                                {brand}
                                                <i
                                                    className="fa fa-close"
                                                    onClick={() => removeBrand(brand)}
                                                ></i>
                                            </a>
                                        </li>
                                    ))}
                                    {selectedColor ? (
                                        <li>
                                            <a href={null} className="filter_tag">
                                                {selectedColor}
                                                <i className="fa fa-close" onClick={removeColor}></i>
                                            </a>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {selectedSize.map((size, i) => (
                                        <li key={i}>
                                            <a href={null} className="filter_tag">
                                                {size}
                                                <i
                                                    className="fa fa-close"
                                                    onClick={() => removeSize(size)}
                                                ></i>
                                            </a>
                                        </li>
                                    ))}
                                    {
                                        <li>
                                            <a href={null} className="filter_tag">
                                                price: {selectedPrice.min}- {selectedPrice.max}
                                            </a>
                                        </li>
                                    } */}
                                </ul>
                            </Col>
                        </Row>
                        <div className="collection-product-wrapper">
                            <div className="product-top-filter">
                                {!noSidebar ? (
                                    <Row>
                                        <Col xl="12">
                                            <div
                                                className="filter-main-btn"
                                                onClick={() => openSidebar()}
                                            >
                                                <span className="filter-btn btn btn-theme">
                                                    <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                                                    Filter
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                ) : (
                                    ""
                                )}
                                <Row>
                                    <Col>
                                        <div className="product-filter-content">
                                            <div className="search-count">
                                                <h5>
                                                    {productList
                                                        ? `Showing Products 1-${productList.length} of ${productList.length}`
                                                        : "loading"}{" "}
                                                    Result
                                                </h5>
                                            </div>
                                            <div className="collection-view">
                                                <ul>
                                                    <li>
                                                        <i
                                                            className="fa fa-th grid-layout-view"
                                                            onClick={() => {
                                                                setLayout("");
                                                                setGrid("col-lg-3");
                                                            }}
                                                        ></i>
                                                    </li>
                                                    <li>
                                                        <i
                                                            className="fa fa-list-ul list-layout-view"
                                                            onClick={() => {
                                                                setLayout("list-view");
                                                                setGrid("col-lg-12");
                                                            }}
                                                        ></i>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="collection-grid-view"
                                                style={
                                                    layout === "list-view"
                                                        ? { visibility: "hidden" }
                                                        : { visibility: "visible" }
                                                }
                                            >
                                                <ul>
                                                    <li>
                                                        <Media
                                                            src={`/assets/images/icon/2.png`}
                                                            alt=""
                                                            className="product-2-layout-view"
                                                            onClick={() => setGrid("col-lg-6")}
                                                        />
                                                    </li>
                                                    <li>
                                                        <Media
                                                            src={`/assets/images/icon/3.png`}
                                                            alt=""
                                                            className="product-3-layout-view"
                                                            onClick={() => setGrid("col-lg-4")}
                                                        />
                                                    </li>
                                                    <li>
                                                        <Media
                                                            src={`/assets/images/icon/4.png`}
                                                            alt=""
                                                            className="product-4-layout-view"
                                                            onClick={() => setGrid("col-lg-3")}
                                                        />
                                                    </li>
                                                    <li>
                                                        <Media
                                                            src={`/assets/images/icon/6.png`}
                                                            alt=""
                                                            className="product-6-layout-view"
                                                            onClick={() => setGrid("col-lg-2")}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-page-per-view">
                                                <select
                                                    onChange={(e) => setLimit(parseInt(e.target.value))}
                                                >
                                                    <option value="10">10 Products Per Page</option>
                                                    <option value="15">15 Products Per Page</option>
                                                    <option value="20">20 Products Per Page</option>
                                                </select>
                                            </div>
                                            <div className="product-page-filter">
                                                <select onChange={(e) => setSortBy(e.target.value)}>
                                                    <option value="AscOrder">Sorting items</option>
                                                    <option value="HighToLow">High To Low</option>
                                                    <option value="LowToHigh">Low To High</option>
                                                    <option value="Newest">Newest</option>
                                                    <option value="AscOrder">Asc Order</option>
                                                    <option value="DescOrder">Desc Order</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={`product-wrapper-grid ${layout}`}>
                                <Row>
                                    {/* Product Box */}
                                    {loading ? (
                                        productList.length === 0 ? (
                                            <Col xs="12">
                                                <div>
                                                    <div className="col-sm-12 empty-cart-cls text-center">
                                                        <img
                                                            src={`/assets/images/empty-search.jpg`}
                                                            className="img-fluid mb-4 mx-auto"
                                                            alt=""
                                                        />
                                                        <h3>
                                                            <strong>Your Cart is Empty</strong>
                                                        </h3>
                                                        <h4>Explore more shortlist some items.</h4>
                                                    </div>
                                                </div>
                                            </Col>
                                        ) : (
                                            <div className="row mx-0 margin-default mt-4">
                                                <div className="col-xl-3 col-lg-4 col-6">
                                                    <PostLoader />
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-6">
                                                    <PostLoader />
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-6">
                                                    <PostLoader />
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-6">
                                                    <PostLoader />
                                                </div>
                                            </div>
                                        )
                                    ) : (
                                        productList.map((product, i) => (
                                            <div className={grid} key={i}>
                                                <div className="product addtocart_count">
                                                    <div>
                                                        <ProductItem product={product}
                                                            addToCompare={() => compareContext.addToCompare(product)}
                                                            addWishlist={() => wishlistContext.addToWish(product)}
                                                            addCart={() => cartContext.addToCart(product, quantity)} key={i} />
                                                        {/* <ProductItem
                                                            des={true}
                                                            product={product}
                                                            symbol={symbol}
                                                            cartClass="cart-info cart-wrap"
                                                            addCompare={() =>
                                                                compareContext.addToCompare(product)
                                                            }
                                                            addWishlist={() =>
                                                                wishlistContext.addToWish(product)
                                                            }
                                                            addCart={() =>
                                                                cartContext.addToCart(product, quantity)
                                                            }
                                                        /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </Row>
                            </div>
                            <div className="section-t-space">
                                <div className="text-center">
                                    <Row>
                                        <Col xl="12" md="12" sm="12">
                                            <Button className="load-more">
                                                {isLoading && (
                                                    <Spinner animation="border" variant="light" />
                                                )}
                                                Load More
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default ProductList;