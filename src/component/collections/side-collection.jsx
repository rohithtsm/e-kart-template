import React, { useContext } from 'react';
import Slider from 'react-slick';
import { Media } from 'reactstrap';
import { CurrencyContext } from '../../helpers/Currency/CurrencyContext';
import { special_product_list } from '../constant/special-product';


const LeftCollection = ({type ,border,product}) => {
    
    const curContext =  useContext(CurrencyContext);
    const currency = curContext.state;
    
    return (
        <div className={`theme-card ${border} `}>
            <h5 className="title-border">new product</h5>
            <Slider className="offer-slider slide-1">
                <div>
                    {special_product_list.slice(0, product).map((product, index) =>
                        <div className="media" key={index}>
                            <a href={product.images[0].src}>
                                <Media alt="" className="img-fluid blur-up lazyload" src={product.images[0].src} /></a>
                            <div className="media-body align-self-center">
                                <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                <a href={product.images[0].src}>
                                    <h6>{product.title}</h6>
                                </a>
                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {special_product_list.slice(3, 6).map((product, index) =>
                        <div className="media" key={index}>
                            <a href={product.images[0].src}>
                                <Media alt="" className="img-fluid blur-up lazyload" src={product.images[0].src} /></a>
                            <div className="media-body align-self-center">
                                <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                <a href={product.images[0].src}>
                                    <h6>{product.title}</h6>
                                </a>
                                <h4>{currency.symbol}{(product.price * currency.value).toFixed(2)}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </Slider>
        </div>
    )
}

export default LeftCollection;