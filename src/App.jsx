import React, { useEffect } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import { useSearchParams, useNavigate } from "react-router-dom";


const App = () => {

  const [searchParams,] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    let page = searchParams.get("page");
    if (page != null) {
      page = page.toLowerCase();
      if (page === "lumafly") navigate("/Lumafly");
      if (page === "marshall") navigate("/Marshall");
      if (page === "evcar") navigate("/EVCar");
      if (page === "mimii") navigate("/MIMII");
    }
  }, [searchParams, navigate]);

  return (
    <>
      <Header />
      <Topbar />
      <Portfolio />
      <About/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
