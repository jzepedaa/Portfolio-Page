import React from "react";
import Logo from "./images/Jaime.jpg";


const About = () => (
  <div className="p-4">
    <div
      className="jumbotron"
      style={{
        background: "#284B63",
        color: "white",
        paddingTop: 30,
        paddingBottom: 30
      }}
    >
      <h1 className="display-4 "
        style={{
          textAlign: "center"
        }}>Welcome to my Profile Page</h1>
      <br></br>
      <div className="container text-center">
        <div className="row">

          <div className="col">

            <p><img src={Logo} alt="" className="img-fluid rounded-circle justify-content-centernpm " /></p>




            <h3>About Me</h3>
            <ul className="text-center">
              <li>
                Bachelors Degree in Computer Science.
          </li>
              <li>
                Completed the Full Stack Coding BootCamp at Northwestern University.
          </li>
              <li> Specialties :  React.js, HTML, CSS, Javascript, MYSQL</li>

              <li>Looking for the right team to grow as a web developer.
          </li>
            </ul>
            <p className="lead" style={{

            }}>
              My inner child makes work fun. My inner idealist always finds solutions & builds bridges. These two sides of me collide and add value to any employer!

        </p>
          </div>
          <br></br>

        </div>
      </div>
    </div>
  </div >
);

export default About;
