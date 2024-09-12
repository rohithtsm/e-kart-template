import React from 'react';
import { Col, Media } from 'reactstrap';
// import NewProduct from './newProduct';
import Category from './category';
// import Size from './size'
import Price from './price';
import GrainFilter from './grain_length';
import PackagingFilter from './packageing_filter';
import LeftCollection from '../collections/side-collection';

const FilterPage = ({sm,sidebarView,closeSidebar}) => {
    return (
        <>
            <Col sm={sm} className="collection-filter" style={sidebarView ? {left:"0px"} : {}}>
                {/* <!-- side-bar colleps block stat --> */}
                <div className="collection-filter-block">
                    {/* <!-- brand filter start --> */}
                    <div className="collection-mobile-back" onClick={() => closeSidebar()}>
                        <span className="filter-back">
                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                        </span>
                    </div>
                    <Category />
                    <GrainFilter/>
                    <PackagingFilter/>
                    {/* <Size/> */}
                    <Price />
                </div>
                {/* <!-- silde-bar colleps block end here -->*/}
                {/* <NewProduct /> */}
                <LeftCollection border="card-border" product={3} />
                {/* <!-- side-bar banner start here -->  */}
                <div className="collection-sidebar-banner">
                    <a href={null}><Media src={'/assets/images/side-banner.png'} className="img-fluid blur-up lazyload" alt="" /></a>
                </div>
                {/* <!-- side-bar banner end here --> */}
            </Col>
        </>
    )
}

export default FilterPage;