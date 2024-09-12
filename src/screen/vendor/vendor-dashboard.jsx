import React from 'react';
import CommonLayout from '../../component/shop/common-layout';
import Dashboard from './component/dashboard';

// import Dashboard from './common/dashboard';
// import CommonLayout from '../../component/shop/common-layout';

const VendorDashboard = () => {
    return (
        <CommonLayout parent="home" title="vendor dashboard">
            <Dashboard />
        </CommonLayout>
    )
}

export default VendorDashboard;