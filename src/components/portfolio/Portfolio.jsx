import "./portfolio.css";
import HKVocalized from "../../assets/HKVocalized.png";
import Lumafly from "../../assets/Lumafly.png";
import SKLearn from "../../assets/SKLearn.png";
import Mashghal from "../../assets/Mashghal.png";
import EVCarUI from "../../assets/EVCarUI.gif";
import Keras from "../../assets/Keras.png";
import React from "react";

const Portfolio = () => {
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
    {
      title: "Hallownest Vocalized",
      img: HKVocalized,
      description: "Lead developer for a mod that adds English voice acting to all Hollow Knight's in-game dialogue.",
      technologies: "Unity | C#",
      link: "https://github.com/Hallownest-Vocalized/Hallownest-Vocalized", 
    },
    {
      title: "Predicting Customer Behaviour",
      img: SKLearn,
      description: "Uses machine learning to predict customer behaviour",
      technologies: "Python | Scikit-Learn | Pandas | Matplotlib",
      link: "https://github.com/Hussain-Aziz/Predicting-Customer-Behaviour", 
    },
    {
      title: "Anomalous Sound Detection",
      img: Keras,
      description: "Uses auto encoder neural networks for anomaly detection in factory machine sounds",
      technologies: "Python | Keras | Matplotlib | Cuml",
      link: "https://github.com/Hussain-Aziz/COE_476_Project", 
    },
    /*{
      title: "",
      img: ,
      description: "",
      technologies: "",
      features: "",
      link: "", 
    },*/
  ];

  soloProjects.forEach((pro, i) => {
    pro.id = i + 1;
  });

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image" style={{display: 'flex'}}>
              <img src={pro.img} alt={pro.title}
                style={{margin: 'auto', borderRadius: '1.5rem', maxHeight: '90%'}}
              />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p><b>Technologies: </b>{pro.technologies}</p>
              {pro.features && <p><b>Features: </b>{pro.features}</p>}
            </div>
            <div className="portfolio__item-cta" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
