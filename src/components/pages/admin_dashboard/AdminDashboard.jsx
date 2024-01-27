import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AdminDashbord_UserManagement from "../../../assets/AdminDashbord_UserManagement.png";
import AdminDashbord_Map from "../../../assets/AdminDashbord_Map.png";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="dash-back" onClick={goBack}>
        <IoMdArrowBack size={25} />
        <p>Back</p>
      </div>

      <div className="dash-body-container">
        <h2 className="dash-h2">Admin Dashboard</h2>
        <p>
            An interal use admin dashboard that was built for <a href="https://webservices.aerovision.app/" target="_blank" rel="noreferrer">Marshall Radio Telemetry </a>
            to help monitor and view user data and analytics. The dashboard was built using React with MaterialUI in the front end and Django with Django Rest framework in the backend.
        </p>
        <img src={AdminDashbord_Map} alt='AdminDashbord_Map' className="dash-display-image"/>
        <p>
          A user management page was also created to help the administrator manage users' information when they receive requests to change it.
          It has functionality to change their email, password, and send a notification to their device.
        </p>
        <img src={AdminDashbord_UserManagement} alt='AdminDashbord_UserManagement' className="dash-display-image"/>
      </div>
    </div>
  );
}

export default AdminDashboard;
