import React, { Fragment } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Media, Container, Row, Col } from "reactstrap";
import { blogList } from "../constant/blog";
import { Slider3 } from "../../service/service";

const BlogSection = ({ type, sectionClass, title, inner, hrClass }) => {

    return (
        <Fragment>
            <section className={sectionClass}>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className={title}>
                                <h4>our collection</h4>
                                <h2 className={inner}>special products</h2>
                                {hrClass ? (
                                    <hr role="tournament6"></hr>
                                ) : (
                                    <div className="line">
                                        <span></span>
                                    </div>
                                )}
                            </div>
                            <Slider {...Slider3} className="slide-3 no-arrow slick-default-margin">
                                { blogList.map((item, index) => (
                                        <Col md="12" key={index}>
                                            <Link to={`/blogs/blog_detail`}>
                                                <div className="classic-effect">
                                                    <Media src={item.img} className="img-fluid" alt="" />
                                                    <span></span>
                                                </div>
                                            </Link>
                                            <div className="blog-details">
                                                <h4>{item.title}</h4>
                                                <Link to={`/blogs/blog_detail`}>
                                                    <p>{item.desc} </p>
                                                </Link>
                                                <hr className="style1" />
                                                <h6>by: {item.date}</h6>
                                            </div>
                                        </Col>
                                    ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
};
export default BlogSection;
