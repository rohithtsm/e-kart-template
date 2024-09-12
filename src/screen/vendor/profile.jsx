import React, { useState } from "react";
import { Media, Container, Row, Col } from "reactstrap";
import FilterPage from "../../component/shop/filter";
import ProductList from "../../component/shop/product-list";
// import FilterPage from "../../../shop/common/filter";
// import ProductList from "../../../shop/common/productList";

const VendorProfile = () => {
    const [sidebarView, setSidebarView] = useState(false);

    const openCloseSidebar = () => {
        if (sidebarView) {
            setSidebarView(!sidebarView);
        } else {
            setSidebarView(!sidebarView);
        }
    };

    return (
        <>
            <div className="vendor-cover">
                <div
                    className="bg-size"
                    style={{ backgroundImage: "url(/assets/images/vendor/profile.jpg)" }}
                ></div>
            </div>

            <section className="vendor-profile pt-0">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="profile-left">
                                <div className="profile-image">
                                    <div>
                                        <Media src={'/assets/images/logos/17.png'} alt="" className="img-fluid" />
                                        <h3>Fashion Store</h3>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <h6>750 followers | 10 review</h6>
                                    </div>
                                </div>
                                <div className="profile-detail">
                                    <div>
                                        <p>
                                            Based in United States, Fashion store has been an
                                            Multikart member since May 15, 2023. Fashion Store are
                                            engaged in all kinds of western clothing. In garment field
                                            we have maintained 3 years exporting experience. company
                                            insist in the principle of "Customer first, Quality
                                            uppermost".Based in United States, Fashion store has been
                                            an{" "}
                                        </p>
                                        <p>
                                            Based in United States, Fashion store has been an
                                            Multikart member since May 15, 2023. Fashion Store are
                                            engaged in all kinds of western clothing. In garment field
                                            we have maintained 3 years exporting experience. company
                                            insist in the principle of "Customer first, Quality
                                            uppermost"
                                        </p>
                                    </div>
                                </div>
                                <div className="vendor-contact">
                                    <div>
                                        <h6>follow us:</h6>
                                        <div className="footer-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com" target="_blank">
                                                        <i
                                                            className="fa fa-facebook"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://plus.google.com" target="_blank">
                                                        <i
                                                            className="fa fa-google-plus"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com" target="_blank">
                                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com" target="_blank">
                                                        <i
                                                            className="fa fa-instagram"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h6>if you have any query:</h6>
                                        <a href="#" className="btn btn-solid btn-sm">
                                            contact seller
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <Container>
                        <Row>
                            <FilterPage sm="3" sidebarView={sidebarView} closeSidebar={() => openCloseSidebar(sidebarView)} />
                            <ProductList colClass="col-xl-3 col-6 col-grid-box" layoutList='' openSidebar={() => openCloseSidebar(sidebarView)} />

                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default VendorProfile;
