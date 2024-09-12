import React from 'react';
// import ProductSection from './common/product_section';
// import { withApollo } from '../../helpers/apollo/apollo';
// import LeftSidebarPage from './product/leftSidebarPage';
import { useParams } from 'react-router-dom';
import CommonLayout from '../component/shop/common-layout';
import { productList } from '../component/constant/product-list';
import NotFound from '../component/common/404';
import TopCollection from '../component/collections/top-collection';
import { Product5 } from '../service/service';
import ProductDetails from '../component/products/product-details';

const ProductPage = () => {
    const params = useParams()
    const product = productList.find((product) => product.id == params.id)

    if(!product || !product.id) {
        return <NotFound />
    }
    
    return (
        <CommonLayout parent="Home" title="Product">
            <ProductDetails pathId={params.id} />
            <TopCollection
                titleClass="title4"
                inner="title-inner4"
                line={true}
                type="vegetables"
                productSlider={Product5}
                title="Related Products"
                designClass="section-b-space addtocart_count ratio_square"
                noSlider="true"
                cartClass="cart-info cart-wrap"
            />
            {/* <ProductSection /> */}
        </CommonLayout>
    );
}


export default ProductPage;