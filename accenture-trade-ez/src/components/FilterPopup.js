import React from "react";

function FilterPopup(props) {
  return props.trigger ? (
    <div className="filter-popup">
      <div className=" filter-popup-inner">
        <button className=" close-btn"> close </button>
        {props.children}
      </div>
    </div>
  ) : (
    " "
  );
}

export default FilterPopup;
