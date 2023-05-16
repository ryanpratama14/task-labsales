import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Main from "./components/Main";
import Features from "./components/Features";
import Infrastructure from "./components/Infrastructure";

const App = () => {
  return (
    <React.Fragment>
      <Main />
      <Features />
      <Infrastructure />
    </React.Fragment>
  );
};

export default App;
