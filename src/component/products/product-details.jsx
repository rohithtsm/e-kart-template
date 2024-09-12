import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Media } from "reactstrap";
import LeftCollection from "../collections/side-collection";
import Service from "./service";
import { productList } from "../constant/product-list";
import ImageZoom from "../common/image-zoom";
import DetailsWithPrice from "./right-side-detail";
import ProductTab from "./product.-tab";


const ProductDetails = ({ pathId }) => {
    const product = {
        "id": 1,
        "title": "trim dress",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        "type": "fashion",
        "brand": "nike",
        "category": "Women",
        "price": "145",
        "new": "true",
        "sale": "true",
        "discount": "40",
        "stock": 5,
        "variants": [
            {
                "id": "1.1",
                "sku": "sku1",
                "size": "s",
                "color": "yellow",
                "image_id": 111,
                "__typename": "Variants"
            },
            {
                "id": "1.2",
                "sku": "sku2",
                "size": "s",
                "color": "white",
                "image_id": 112,
                "__typename": "Variants"
            },
            {
                "id": "1.3",
                "sku": "sku3",
                "size": "s",
                "color": "pink",
                "image_id": 113,
                "__typename": "Variants"
            },
            {
                "id": "1.4",
                "sku": "sku4",
                "size": "m",
                "color": "yellow",
                "image_id": 111,
                "__typename": "Variants"
            },
            {
                "id": "1.5",
                "sku": "sku5",
                "size": "m",
                "color": "white",
                "image_id": 112,
                "__typename": "Variants"
            },
            {
                "id": "1.6",
                "sku": "sku5",
                "size": "m",
                "color": "pink",
                "image_id": 113,
                "__typename": "Variants"
            },
            {
                "id": "1.7",
                "sku": "sku1",
                "size": "l",
                "color": "yellow",
                "image_id": 111,
                "__typename": "Variants"
            }
        ],
        "images": [
            {
                "alt": "yellow",
                "src": "/assets/images/pro3/39.jpg",
                "__typename": "Images"
            },
            {
                "alt": "white",
                "src": "/assets/images/pro3/6.jpg",
                "__typename": "Images"
            },
            {
                "alt": "pink",
                "src": "/assets/images/pro3/25.jpg",
                "__typename": "Images"
            }
        ],
        "__typename": "Product"
    }

    var products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
    };

    const sliderNav = {
        slidesToShow: product?.images?.length,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        focusOnSelect: true,
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider1, slider2]);

    const filterClick = () => {
        document.getElementById("filter").style.left = "-15px";
    };

    const changeColorVar = (img_id) => {
        slider2.current?.slickGoTo(img_id);
    };



    return (
        <section className="">
            <div className="collection-wrapper">
                <Container>
                    <Row>
                        <Col sm="3" className="collection-filter" id="filter">
                            {/* <Filter /> */}
                            <Service />
                            {/* <!-- side-bar single product slider start --> */}
                            <LeftCollection border="card-border" product={3} />
                            {/* <!-- side-bar single product slider end --> */}
                        </Col>
                        <Col lg="9" sm="12" xs="12">
                            <Container fluid={true}>
                                <Row>
                                    <Col xl="12" className="filter-col">
                                        <div className="filter-main-btn mb-2">
                                            <span onClick={filterClick} className="filter-btn">
                                                <i className="fa fa-filter" aria-hidden="true"></i> filter
                                            </span>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg="6" className="product-thumbnail">
                                        <Slider {...products} asNavFor={nav2} ref={(slider) => setSlider1(slider)} className="product-slick">
                                            {product?.images?.map((vari, index) => (
                                                <div key={index}>
                                                    <ImageZoom image={vari} />
                                                </div>
                                            ))}
                                        </Slider>
                                   
                                            <Slider className="slider-nav" {...sliderNav} asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
                                                {product?.images?.map((item, i) => (
                                                    <div key={i}>
                                                        <Media src={item.src} key={i} alt={item.alt} className="img-fluid" />
                                                    </div>
                                                ))}
                                            </Slider>
                                    
                                    </Col>
                                    <Col lg="6" className="rtl-text product-ps">
                                        <DetailsWithPrice item={product} changeColorVar={changeColorVar} />
                                    </Col>
                                </Row>

                            </Container>
                            <ProductTab />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default ProductDetails;
