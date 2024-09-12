import React from 'react';
import CommonLayout from '../../component/shop/common-layout';
import CartDetail from './component/cart-detail';


const WishlistPage = () => {
    return (
        <CommonLayout parent="home" title="wishlist">
            <CartDetail />
        </CommonLayout>
    )
}

export default WishlistPage;