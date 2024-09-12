import React, { useState } from 'react';
import { Collapse, Input } from 'reactstrap';
import { packaging_size } from '../constant/filter';


const PackagingFilter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="collection-collapse-block open">
            <h3 className="collapse-block-title" onClick={toggle}>Packaging Size</h3>
            <Collapse isOpen={isOpen}>
                <div className="collection-collapse-block-content">
                    <div className="color-selector collection-brand-filter">
                        {packaging_size.map((size, index) => (
                            <div
                                className="form-check custom-checkbox collection-filter-checkbox"
                                key={index}
                            >
                                <Input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={size}
                                />
                                <label className="custom-control-label" htmlFor={size}>
                                    {size}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default PackagingFilter;