import React from "react";

import "./index.css";

const FooterPagination = ({ pages }) => {
  return (
    <div className="footerPaginationContainer">
      <div className="tabsContainer">
        {pages.map((number, index) => {
          return <button key={index}>{number}</button>;
        })}
      </div>
    </div>
  );
};

export default FooterPagination;
