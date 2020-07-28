import React from "react";

import "./index.css";
import Header from "../../components/Header";

function Comic() {
  return (
    <div className="comicPageContainer">
      <Header />
      <div className="comicInfoContainer">
        <div className="comicImage">
          <h1>COMIC TEST TITLE</h1>
        </div>
        <div className="comicTextInfo"></div>
      </div>
    </div>
  );
}

export default Comic;
