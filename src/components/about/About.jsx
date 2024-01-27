import "./about.css";

import React from "react";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container">
        <div className="about__content">
          <p>
            Computer Engineering Student with minor in Data Science at American University of Sharjah
            <br />
            - Experienced in using C#, Java, Python, and C++
            <br />
            - Experienced in building web applications using React and Django deployed on AWS
            <br />
            - Interested in Machine Learning and Data Science, and Computer Security
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;