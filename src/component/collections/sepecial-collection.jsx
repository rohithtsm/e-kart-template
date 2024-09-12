import React, { useContext } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import ProductItem from '../products/product-box2';
import LeftCollection from './side-collection';
import { CompareContext } from '../../helpers/Compare/CompareContext';
import CartContext from '../../helpers/cart';
import { WishlistContext } from '../../helpers/wishlist/WishlistContext';
import { special_product_list } from '../constant/special-product';

const ProductSlider = ({ type, cartClass, designClass }) => {
    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);
    const contextCompare = useContext(CompareContext);
    const quantity = context.quantity;

    return (
        <section className={designClass}>
            <Container>
                <Row className="partition3 partition_3">
                    <Col lg="4">
                        <LeftCollection type={type} border="card-border" product={3} />
                    </Col>
                    <Col lg="4" className="ccenter-slider border-0">
                        <div>
                            <div className="title4">
                                <h2 className="title-inner4">special products</h2>
                                <div className="line"><span></span></div>
                            </div>
                            <Slider className="offer-slider slide-1 center-image-width no-arrow">
                                {special_product_list.slice(0, 2).map((product, i) =>
                                    <div key={i}>
                                        <ProductItem product={product}
                                            addToCompare={() => contextCompare.addToCompare(product)}
                                            addWishlist={() => contextWishlist.addToWish(product)}
                                            addCart={() => context.addToCart(product, quantity)} cartClass={cartClass} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </Col>
                    <Col lg="4">
                        <LeftCollection type={type} border="card-border" product={3} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductSlider;