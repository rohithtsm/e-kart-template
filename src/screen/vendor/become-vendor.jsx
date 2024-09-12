import React from 'react';
import CommonLayout from '../../component/shop/common-layout';
import Become from './component/onboard-vendor';

const BecomeVendor = () => {
    return (
        <CommonLayout parent="home" title="Become vendor">
            <Become />
        </CommonLayout>
    )
}

export default BecomeVendor;