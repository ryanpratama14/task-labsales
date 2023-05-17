import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Main from "./components/Main";
import Features from "./components/Features";
import Infrastructure from "./components/Infrastructure";
import Footer from "./components/Footer";
import Description from "./components/Description";

const App = () => {
  return (
    <React.Fragment>
      <Main />
      <Features />
      <Infrastructure />
      <Description />
      <Footer />
    </React.Fragment>
  );
};

export default App;
