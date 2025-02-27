import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, Media, Input } from "reactstrap";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";
import CartContext from "../../helpers/cart";
import MasterSocial from "./master-social";
import CountdownComponent from "../common/coun-down";

const DetailsWithPrice = ({ item, stickyClass, changeColorVar }) => {
    const [modal, setModal] = useState(false);
    const CurContect = useContext(CurrencyContext);
    const symbol = CurContect.state.symbol;
    const toggle = () => setModal(!modal);
    const product = item;
    const context = useContext(CartContext);
    const stock = context.stock;
    const plusQty = context.plusQty;
    const minusQty = context.minusQty;
    const quantity = context.quantity;
    const uniqueColor = [];
    const uniqueSize = [];

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    return (
        <>
            <div className={`product-right ${stickyClass}`}>
                <h2> {product.title} </h2>
                <h4>
                    <del>
                        {symbol}
                        {product.price}
                    </del>
                    <span>{product.discount}% off</span>
                </h4>
                <h3>
                    {symbol}
                    {product.price - (product.price * product.discount) / 100}
                </h3>
                {product.variants.map((vari) => {
                    var findItem = uniqueColor.find((x) => x.color === vari.color);
                    if (!findItem) uniqueColor.push(vari);
                    var findItemSize = uniqueSize.find((x) => x === vari.size);
                    if (!findItemSize) uniqueSize.push(vari.size);
                })}
                {changeColorVar === undefined ? (
                    <>
                        {uniqueColor.some((vari) => vari.color) ? (
                            <ul className="color-variant">
                                {uniqueColor.map((vari, i) => {
                                    return <li className={vari.color} key={i} title={vari.color}></li>;
                                })}
                            </ul>
                        ) : (
                            ""
                        )}
                    </>
                ) : (
                    <>
                        {uniqueColor.some((vari) => vari.color) ? (
                            <ul className="color-variant">
                                {uniqueColor.map((vari, i) => {
                                    return <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>;
                                })}
                            </ul>
                        ) : (
                            ""
                        )}
                    </>
                )}
                <div className="product-description border-product">
                    {product.variants ? (
                        <div>
                            {uniqueSize.some((size) => size) ? (
                                <>
                                    <h6 className="product-title size-text">
                                        select size
                                        <span>
                                            <a href={null} data-toggle="modal" data-target="#sizemodal" onClick={toggle}>
                                                size chart
                                            </a>
                                        </span>
                                    </h6>
                                    <Modal isOpen={modal} toggle={toggle} centered>
                                        <ModalHeader toggle={toggle}>Sheer Straight Kurta</ModalHeader>
                                        <ModalBody>
                                            <Media src="/assets/images/size-chart.jpg" alt="size" className="img-fluid" />
                                        </ModalBody>
                                    </Modal>
                                    <div className="size-box">
                                        <ul>
                                            {uniqueSize.map((data, i) => {
                                                return (
                                                    <li key={i}>
                                                        <a href={null}>{data}</a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                    <span className="instock-cls">{stock}</span>
                    <h6 className="product-title">quantity</h6>
                    <div className="qty-box">
                        <div className="input-group">
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                            </span>
                            <Input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(product)} data-type="plus" data-field="">
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="product-buttons">
                    <a href={null} className="btn btn-solid" onClick={() => context.addToCart(product, quantity)}>
                        add to cart
                    </a>
                    <Link to={`/page/account/checkout`} className="btn btn-solid" onClick={() => context.addToCart(product, quantity)}>
                        buy now
                    </Link>
                </div>
                <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>{product.description}</p>
                </div>
                <div className="border-product">
                    <h6 className="product-title">share it</h6>
                    <div className="product-icon">
                        <MasterSocial />
                    </div>
                </div>
                <div className="border-product">
                    <h6 className="product-title">Time Reminder</h6>
                    <CountdownComponent />
                </div>
            </div>
        </>
    );
};

export default DetailsWithPrice;
