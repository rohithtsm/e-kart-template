import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../helpers/cart";
import { Container, Row, Col, Media, Input } from "reactstrap";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";

const CartDetail = () => {
    const context = useContext(CartContext);
    const cartItems = context.state;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const total = context.cartTotal;
    const removeFromCart = context.removeFromCart;
    const [quantity, setQty] = useState(1);
    const [quantityError, setQuantityError] = useState(false);
    const updateQty = context.updateQty;

    const handleQtyUpdate = (item, quantity) => {
        if (quantity >= 1) {
            setQuantityError(false);
            updateQty(item, quantity);
        } else {
            setQuantityError(true);
        }
    };

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const minusQty = () => {
        if (quantity > 1) {
            setStock("InStock");
            setQty(quantity - 1);
        }
    };

    const plusQty = (product) => {
        if (product.stock >= quantity) {
            setQty(quantity + 1);
        } else {
            setStock("Out of Stock !");
        }
    };

    return (
        <div>
            {cartItems && cartItems.length > 0 ? (
                <section className="cart-section section-b-space">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                        <tr className="table-head">
                                            <th scope="col">image</th>
                                            <th scope="col">product name</th>
                                            <th scope="col">price</th>
                                            <th scope="col">quantity</th>
                                            <th scope="col">action</th>
                                            <th scope="col">total</th>
                                        </tr>
                                    </thead>
                                    {cartItems.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                                <tr>
                                                    <td>
                                                        <Link to={`/left-sidebar/product/` + item.id}>
                                                            <Media
                                                                src={
                                                                    item.images
                                                                        ? item.images[0].src
                                                                        : item.images[0].src
                                                                }
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`/left-sidebar/product/` + item.id}>
                                                            {item.title}
                                                        </Link>
                                                        <div className="mobile-cart-content row">
                                                            <div className="col-xs-3">
                                                                <div className="qty-box">
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="number"
                                                                            name="quantity"
                                                                            onChange={(e) =>
                                                                                handleQtyUpdate(item, e.target.value)
                                                                            }
                                                                            className="form-control input-number"
                                                                            value={item.qty}
                                                                            style={{
                                                                                borderColor: quantityError && "red",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {item.qty >= item.stock ? "out of Stock" : ""}
                                                            </div>
                                                            <div className="col-xs-3">
                                                                <h2 className="td-color">
                                                                    {symbol}
                                                                    {item.price -
                                                                        (item.price * item.discount) / 100}
                                                                </h2>
                                                            </div>
                                                            <div className="col-xs-3">
                                                                <h2 className="td-color">
                                                                    <a href="#" className="icon">
                                                                        <i
                                                                            className="fa fa-times"
                                                                            style={{cursor: 'pointer'}}
                                                                            onClick={() => removeFromCart(item)}></i>
                                                                    </a>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h2>
                                                            {symbol}
                                                            {item.price - (item.price * item.discount) / 100}
                                                        </h2>
                                                    </td>
                                                    <td>
                                                        <div className="qty-box">
                                                            <div className="input-group">
                                                                <input
                                                                    type="number"
                                                                    name="quantity"
                                                                    onChange={(e) =>
                                                                        handleQtyUpdate(item, e.target.value)
                                                                    }
                                                                    className="form-control input-number"
                                                                    value={item.qty}
                                                                    style={{
                                                                        borderColor: quantityError && "red",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        {item.qty >= item.stock ? "out of Stock" : ""}
                                                    </td>
                                                    <td>
                                                        <i
                                                            className="fa fa-times"
                                                            onClick={() => removeFromCart(item)}></i>
                                                    </td>
                                                    <td>
                                                        <h2 className="td-color">
                                                            {symbol}
                                                            {item.total}
                                                        </h2>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        );
                                    })}
                                </table>
                                <table className="table cart-table table-responsive-md">
                                    <tfoot>
                                        <tr>
                                            <td>total price :</td>
                                            <td>
                                                <h2>
                                                    {symbol} {total}{" "}
                                                </h2>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </Col>
                        </Row>
                        <Row className="cart-buttons">
                            <Col xs="6">
                                <Link to={`/shop/left_sidebar`} className="btn btn-solid">
                                    continue shopping
                                </Link>
                            </Col>
                            <Col xs="6">
                                <Link to={`/page/account/checkout`} className="btn btn-solid">
                                    check out
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            ) : (
                <section className="cart-section section-b-space">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <div>
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <Media
                                            src="/assets/images/icon-empty-cart.png"
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
                        </Row>
                    </Container>
                </section>
            )}
        </div>
    );
};

export default CartDetail;