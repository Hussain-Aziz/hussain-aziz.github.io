import "./portfolio.css";
import HKVocalized from "../../assets/HKVocalized.png";
import Lumafly from "../../assets/Lumafly.png";
import SKLearn from "../../assets/SKLearn.png";
import Mashghal from "../../assets/Mashghal.png";
import EVCarUI from "../../assets/EVCarUI.gif";
import Keras from "../../assets/Keras.png";
import MarshallLogo from "../../assets/MarshallLogo.png";
import Cpp from "../../assets/Cpp.png";
import Java from "../../assets/Java.png";
import Flutter from "../../assets/Flutter.png";
import PFW from "../../assets/PFW.png";
import { Link } from 'react-router-dom';
import React from "react";

const Portfolio = () => {

  const [isShowMoreClicked, setShowMoreClicked] = React.useState(false);

  const projects = soloProjects.concat(isShowMoreClicked ? extraSoloProjects : []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((pro, id) => (
          <article className={`${isShowMoreClicked && id >= 6 ? 'new-item ' : ''}portfolio__item`} key={id}>
            <div className="portfolio__item-image" style={{display: 'flex'}}>
              <img src={pro.img} alt={pro.title}
                style={{margin: 'auto', borderRadius: '1.5rem', maxHeight: '90%'}}
              />
            </div>
            <div className="portfolio__item-content">
              <h3><b>{pro.title}</b></h3>
              {typeof pro.description === 'string' ? <p>{pro.description}</p> : pro.description}
              <p><b>Technologies: </b>{pro.technologies}</p>
              {pro.features && <p><b>Features: </b>{pro.features}</p>}
            </div>
            <div className="portfolio__item-cta" style={{flexGrow: 1, alignItems: 'end'}}>
              {pro.link.includes('http') 
              ? <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer">View Project</a>
              : <Link to={pro.link} className="btn btn-primary">View Project</Link>
              }
            </div>
          </article>
        ))}
      </div>
      <div className="show-more-container">
        {!isShowMoreClicked && <button className="btn show-more" onClick={() => setShowMoreClicked(true)}>Show More</button>}
      </div>
    </section>
  );
};

const soloProjects = [
  {
    title: "Lumafly",
    img: Lumafly,
    description: "Fully featured modinstaller with 175k+ downloads.",
    technologies: "C# | AvaloniaUI",
    features: "Cross Platform | Fully Localized in 7 languages",
    link: "https://github.com/TheMulhima/Lumafly#readme",
  },
  {
    title: "Admin Dashboard",
    img: MarshallLogo,
    description: <p>Created a webapp for <a target="_blank" rel="noreferrer" href="https://webservices.aerovision.app/">Marshall Radio Telemetry</a> which displayed analytics and locations for 4k+ users</p>,
    technologies: "React | Django",
    link: "/marshall",
  },
  {
    title: "Anomalous Sound Detection",
    img: Keras,
    description: "Uses auto encoder neural networks for anomaly detection in factory machine sounds",
    technologies: "Python | Keras | Matplotlib | Cuml",
    link: "https://github.com/Hussain-Aziz/COE_476_Project", 
  },      
  {
    title: "Hallownest Vocalized",
    img: HKVocalized,
    description: "Lead developer for a mod that adds English voice acting to all Hollow Knight's in-game dialogue.",
    technologies: "Unity | C#",
    link: "https://github.com/Hallownest-Vocalized/Hallownest-Vocalized", 
  },
  {
    title: "IEEE Race Car Dashboard",
    img: EVCarUI ,
    description: "Built a car dashboard screen to be displayed on a Raspberry Pi screen in a custom built EV car",
    technologies: "C# | Avalonia | Raspberry Pi | LoRa",
    link: "https://github.com/IEEEPFWStudentChapter/EV-Car-UI/", 
  },
  {
    title: "Mashghal",
    img: Mashghal,
    description: "Built demo mobile app for a national competition that involves creating and developing a startup idea.",
    technologies: "Flutter | Dart",
    link: "https://github.com/Hussain-Aziz/Mashghal#readme",
  },
];

const extraSoloProjects = [
  {
    title: "Time Convertor",
    img: Flutter,
    description: "A flutter app to make converting time between timezones as easy as possible. Allows you to add new zones from their map location or zone name.",
    technologies: "Flutter | Dart",
    link: "https://github.com/Hussain-Aziz/TimeConvertor#readme", 
  },
  {
    title: "Predicting Customer Behaviour",
    img: SKLearn,
    description: "Uses machine learning to predict customer behaviour",
    technologies: "Python | Scikit-Learn | Pandas | Matplotlib",
    link: "https://github.com/Hussain-Aziz/Predicting-Customer-Behaviour#readme", 
  },
  {
    title: "IEEE PFW Student Chapter Website",
    img: PFW,
    description: "A website for the IEEE PFW Student Chapter",
    technologies: "HTML | CSS | JavaScript",
    link: "https://ieeepfwstudentchapter.github.io/IEEEWebsite-2023update-/", 
  },
  {
    title: "Pizza Store System",
    img: Cpp,
    description: "An intertwined and complex pizza store system that handles customers, staff, chefs, drivers and managers in the same application.",
    technologies: "C++ | CLI | CMake",
    link: "https://github.com/Hussain-Aziz/Pizza-Store-System#readme", 
  },
  {
    title: "Hunger Games Simulator",
    img: Java,
    description: "A multithreaded Java application that demonstrates the use of design patterns such as Observer, Singleton, Template, Strategy, State, and Command.",
    technologies: "Java | CLI | Multithreading",
    link: "https://github.com/Hussain-Aziz/HungerGames#readme", 
  },
];

export default Portfolio;
