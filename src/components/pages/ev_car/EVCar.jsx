import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import EVCarUI from '../../../assets/EVCarUI.gif'
import "./EVCar.css";

const EVCar = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="ev-car-back" onClick={goBack}>
        <IoMdArrowBack size={25} />
        <p>Back</p>
      </div>

      <div className="ev-car-body-container">
        <h2 className="ev-car-h2">IEEE EV race car project</h2>
        <p>
          The project's goal was to assemble an electric car from parts found in junkyards to race in autocross competitions.
          Mainly helped with creating the car's dashboard, which displays the car's speed, battery level, and other information.
        </p>
        <img src={EVCarUI} alt='EVCarUI' className="ev-car-display-image"/>
      </div>
    </div>
  );
}

export default EVCar;
