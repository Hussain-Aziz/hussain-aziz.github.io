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
    const changePage = (path) => {
      navigate("/#portfolio") // so we can get the correct behavior when using navigate(-1)
      navigate(path);
    }
    if (page != null) {
      page = page.toLowerCase();
      if (page === "lumafly") changePage("/Lumafly");
      if (page === "marshall") changePage("/Marshall");
      if (page === "evcar") changePage("/EVCar");
      if (page === "mimii") changePage("/MIMII");
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
