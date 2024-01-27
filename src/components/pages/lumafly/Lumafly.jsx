import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LumaflyMods from "../../../assets/LumaflyMods.png";
import LumaflyMain from "../../../assets/LumaflyMain.png";
import "./Lumafly.css";
import { IconContext } from "react-icons";

const Lumafly = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const features = [
    "Localization support",
    "Automatic updates",
    "Grouping mods into profiles and sharing them",
    "Native uri scheme with a website",
    "Mod installation and updates",
    "Filtering newly released and updated mods",
    "Sophisticated search system",
    "Offline mode"
  ];

  return (
    <IconContext.Provider value={{ size: "25" }}>
    <div>
      <div className="lumafly-back" onClick={goBack}>
        <IoMdArrowBack />
        <p>Back</p>
      </div>

      <div className="lumafly-body-container">
        <h2 className="lumafly-h2">Lumafly</h2>
        <div className="lumafly-view-project-container">
          <a href="https://github.com/TheMulhima/Lumafly" title="View on Github"><FaGithub/></a>
          <a href="https://themulhima.github.io/Lumafly" title="View website"><FaExternalLinkAlt/></a>
        </div>
        <p> A fully featured, cross platform desktop app written in C# which currently has 175k+ downloads. Has features such as:</p>
        <ul className="lumafly-bullet-list">
          {features.map((feature, id) => (
            <li key={id}>{feature}</li>
          ))}
        </ul>
        <div className="lumafly-images-container">
          <img src={LumaflyMain} alt='LumaflyMain' className="lumafly-display-image"/>
          <img src={LumaflyMods} alt='LumaflyMods' className="lumafly-display-image"/>
        </div>
        <div className="lumafly-images-container">
          <div className="lumafly-bottom-buttons-container" style={{display: 'flex', justifyContent: 'end'}}>
            <a className="btn btn-primary" href="https://github.com/TheMulhima/Lumafly" title="View on Github">View on Github</a>
          </div>
          <div className="lumafly-bottom-buttons-container">
            <a className="btn btn-primary" href="https://themulhima.github.io/Lumafly" title="View website">View website</a>
          </div>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default Lumafly;
