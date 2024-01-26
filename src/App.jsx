import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";

const App = () => {

  return (
    <>
      <Header />
      <Topbar />
      <Portfolio />
      <Intro/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
