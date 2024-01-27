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
    const page = searchParams.get("page");
    if (page === "Lumafly") navigate("/Lumafly");
    if (page === "Marshall") navigate("/Marshall");
    if (page === "EVCar") navigate("/EVCar");
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
