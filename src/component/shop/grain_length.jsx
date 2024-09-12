import React, { useState } from "react";
import { Collapse, Input } from "reactstrap";
import { grain_length } from "../constant/filter";


const GrainFilter = () => {
  // const context = useContext(FilterContext);
  // const isChecked = context.isChecked;
  // const filterChecked = context.filterChecked;
  const [isOpen, setIsOpen] = useState(false);
  const toggleBrand = () => setIsOpen(!isOpen);

  return (
    <div className="collection-collapse-block open">
      <h3 className="collapse-block-title" onClick={toggleBrand}>
        Grain Length
      </h3>
      <Collapse isOpen={isOpen}>
        <div className="collection-collapse-block-content">
          <div className="collection-brand-filter">
            {grain_length.map((grain, index) => (
              <div
                className="form-check custom-checkbox collection-filter-checkbox"
                key={index}
              >
                <Input
                  type="checkbox"
                  className="custom-control-input"
                  id={grain}
                />
                <label className="custom-control-label" htmlFor={grain}>
                  {grain}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default GrainFilter;
