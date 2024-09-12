import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductItem from '../products/product-box';
import { Row, Col, Container } from 'reactstrap';
import CartContext from '../../helpers/cart';
import { WishlistContext } from '../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../helpers/Compare/CompareContext';
import PostLoader from '../common/post-loader';
import { productList } from '../constant/product-list';


const TopCollection = ({ type, title, subtitle, designClass, noSlider, cartClass, productSlider ,titleClass ,inner ,line}) => {
    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);
    const contextCompare = useContext(CompareContext);
    const quantity = context.quantity;

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, [])

    return (
        <>
            <section className={designClass}>
                {noSlider ?
                    <Container>
                        <Row>
                            <Col>
                                <div className={titleClass}>
                                    {subtitle ? <h4>{subtitle}</h4> : ''}
                                    <h2 className={inner}>{title}</h2>
                                    {   line ?
                                        <div className="line"><span></span></div>
                                        :
                                        <hr role="tournament6" />
                                    }
                                </div>
                                {(loading) ?
                                    <div className="row mx-0 margin-default">
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
                                    :
                                    <Slider {...productSlider} className="product-4 product-m no-arrow">
                                        {productList.map((product, index) =>
                                            <div key={index}>
                                                <ProductItem product={product}
                                                    addToCompare={() => contextCompare.addToCompare(product)}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    addCart={() => context.addToCart(product,quantity)}  cartClass={cartClass} />
                                            </div>
                                        )
                                        }
                                    </Slider>
                                }
                            </Col>
                        </Row>
                    </Container>
                    :
                    <>
                        <div className="title1 title-gradient  section-t-space">
                            {subtitle ? <h4>{subtitle}</h4> : ''}
                            <h2 className="title-inner1">{title}</h2>
                            <hr role="tournament6" />
                        </div>
                        <Container>
                            <Row>
                                {productList.slice(0, 8).map((product, index) =>
                                    <Col xl="3" sm="6" key={index}>
                                        <div>
                                            <ProductItem product={product}
                                                addToCompare={() => contextCompare.addToCompare(product)}
                                                addWishlist={() => contextWishlist.addToWish(product)}
                                                addCart={() => context.addToCart(product,quantity)} key={index} />
                                        </div>
                                    </Col>
                                )
                                }
                            </Row>
                        </Container>
                    </>
                }

            </section>
        </>
    )
}


export default TopCollection;