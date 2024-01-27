import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import COE476Proj from "../../../assets/COE476Proj.pdf";
import "./MIMII.css";

const MIMII = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="mimii-back" onClick={goBack}>
        <IoMdArrowBack size={25} />
        <p>Back</p>
      </div>

      <div className="mimii-body-container">
        <h2 className="mimii-h2">Anomalous Sound Detection</h2>
        <p>
          This project was done for my neural networks course project and now is being pursued as a research project.
          The goal of the project was to create neural network model that could detect anomalous sounds in a factory machine sounds.
          The dataset we used was the MIMII dataset, which contains 4 different types of sounds: pump, fan, slider, and valve.
          The model that worked best was a convolutional autoencoder which was trained on the normal data and to detect anomalies we used
          unsupervised nearest neighbors. The model was able to detect anomalies with 80% accuracy.
        </p>
        <div className="mimii-view-project-container">
          <a href={COE476Proj} target='_blank' rel='noopener noreferrer' className="btn btn-primary">View Report</a>
          <a href="https://github.com/Hussain-Aziz/COE_476_Project" target='_blank' rel='noopener noreferrer' className="btn btn-primary">View Code</a>
        </div>
      </div>
    </div>
  );
}

export default MIMII;
