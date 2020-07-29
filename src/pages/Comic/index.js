import React from "react";

import "./index.css";
import Header from "../../components/Header";

function Comic() {
  return (
    <div className="comicPageContainer">
      <Header />
      <div className="comicInfoContainer">
        <a className="backBtn" href="/">
          Go Back
        </a>
        <div className="comicInfoContentContainer">
          <div className="comicImage">
            <img
              src={
                "http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada.jpg"
              }
              alt="Cover"
              className="comicCover"
            />
          </div>
          <div className="comicTextInfo">
            <h1>MARVEL</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comic;
