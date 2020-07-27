import React from "react";
import md5 from "md5";

function Home() {
  useEffect(async () => {
    const ts = Date.now();
    const hash = md5(
      `${ts}73f0b9bd936095550b83a44ae0bd5b949fb9eec02883bc674f6f35a295e59e6ea3387d6d`
    );
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/stories?ts=${ts}&apikey=2883bc674f6f35a295e59e6ea3387d6d&hash=${hash}`
    );
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  }, []);

  return <h1>THIS IS THE HOME COMPONENT</h1>;
}

export default Home;
