import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { type_rice } from "../constant/filter";
// import FilterContext from "../../helpers/filter/FilterContext";

const Category = () => {
  // const context = useContext(FilterContext);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  // const setSelectedCategory = context.setSelectedCategory;
  const [url, setUrl] = useState();

  const updateCategory = (category) => {
    // setSelectedCategory(category);
  };

  return (
    <>
      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title" onClick={toggleCategory}>
          Category
        </h3>
        <Collapse isOpen={isCategoryOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              <ul className="category-list">
                {type_rice.map((type, i) => (
                  <li key={i}>
                    <a href={null} onClick={() => updateCategory("type")}>
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Category;
