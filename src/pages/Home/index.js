import React, { useState, useEffect } from "react";
import md5 from "md5";

//Components && styles
import "./index.css";
import Header from "../../components/Header";
import ComicCard from "../../components/ComicCard";
import HomeCartSidebar from "../../components/HomeCartSidebar";

function Home() {
  const [comics, setComics] = useState([]);

  // Responsible for fetching the first comic list when the page loads.
  useEffect(() => {
    const fetchData = async () => {
      // The ts and hash constants are necessary to validate the marvel API using a MD5 Encryption Library
      const ts = Date.now();
      const hash = md5(
        `${ts}73f0b9bd936095550b83a44ae0bd5b949fb9eec02883bc674f6f35a295e59e6ea3387d6d`
      );
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=2883bc674f6f35a295e59e6ea3387d6d&hash=${hash}`
      );
      const parsedResponse = await response.json();
      setComics(parsedResponse.data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="homeContainer">
      <Header />
      <div
        style={{
          display: "flex",
          width: "90%",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {comics.map((comic, index) => {
          return (
            <ComicCard
              key={index}
              thumbnail={comic.thumbnail}
              title={comic.title}
              format={comic.prices}
            />
          );
        })}
      </div>
      <HomeCartSidebar />
    </div>
  );
}

export default Home;
