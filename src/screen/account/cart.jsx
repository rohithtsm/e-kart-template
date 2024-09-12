import React from 'react';
import CommonLayout from '../../component/shop/common-layout';
import CartDetail from './component/cart-detail';


const CartPage = () => {
    return (
        <CommonLayout parent="home" title="cart">
            <CartDetail />
        </CommonLayout>
    )
}

export default CartPage;