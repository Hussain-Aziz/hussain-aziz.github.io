import React, {useEffect} from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Architecture from "../../../assets/exchange_architecture.png";
import UseCase from "../../../assets/exchange_usecase.png";
import Workflow1 from "../../../assets/exchange_workflow_1.png";
import Workflow2 from "../../../assets/exchange_workflow_2.png";
import Workflow3 from "../../../assets/exchange_workflow_3.png";
import Workflow4 from "../../../assets/exchange_workflow_4.png";
import Workflow5 from "../../../assets/exchange_workflow_5.png";
import Workflow6 from "../../../assets/exchange_workflow_6.png";
import { exchange } from "../../../constants/pageNames";
import useFixUrl from "../../../hooks/useFixUrl";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Exchange.css";

const Exchange = () => {
  const navigate = useNavigate();

  useFixUrl(exchange);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="exchange-back" onClick={goBack}>
        <IoMdArrowBack size={25} />
        <p>Back</p>
      </div>

      <div className="exchange-body-container">
        <h2 className="exchange-h2">AUS Exchange Program Application Platform</h2>
        <div className="lumafly-view-project-container">
          <a href="https://github.com/Hussain-Aziz/exchange_application_frontend" title="View frontend on Github"><FaGithub/></a>
          <a href="https://exchange-application-frontend.vercel.app/" title="View website"><FaExternalLinkAlt/></a>
        </div>
        <p>
            A website for the <a href="https://www.aus.edu/academics/international-study-and-exchange" target="_blank" rel="noreferrer">Exchange Office at AUS </a>
            to help streamline and automate the previously manual course approval process. The website was built using NextJS in the front end and Django with Django Rest framework in the backend.
        </p>
        <p>
            Below is the deployment architecture of the website which was hosted on AWS
        </p>
        <img src={Architecture} alt='Architecture' className="exchange-display-image-small"/>
        <p>
          Below is the use case diagram of the website which shows all the required functionalities of the website
        </p>
        <img src={UseCase} alt='usecase' className="exchange-display-image-small"/>
        <p>
            Below is an example workflow of the website which shows the process of course approval
        </p>
        <img src={Workflow1} alt='workflow1' className="exchange-display-image-small"/>
        <img src={Workflow2} alt='workflow2' className="exchange-display-image-small"/>
        <img src={Workflow3} alt='workflow3' className="exchange-display-image-small"/>
        <img src={Workflow4} alt='workflow4' className="exchange-display-image-small"/>
        <img src={Workflow5} alt='workflow5' className="exchange-display-image-small"/>
        <img src={Workflow6} alt='workflow6' className="exchange-display-image-small"/>
      </div>
    </div>
  );
}

export default Exchange;
