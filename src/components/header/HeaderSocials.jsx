import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const HeaderSocials = () => {
  return (
    <IconContext.Provider value={{ size: '1.5em' }}>
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/hussain-aziz-saif/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Hussain-Aziz"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default HeaderSocials;
