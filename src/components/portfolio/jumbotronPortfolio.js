import React, { Component } from "react";
import PortCard from "./portfolio-card.js";
import cardData from "./cardData.json";

class JumbotronPortfolio extends Component {
  render() {
    return (
      <div className="px-4">
        <div
          className="jumbotron shadow"
          style={{ backgroundColor: "#f8f9fa", color: "black" }}
        >
          <div className="container">
            <h1 className="d-flex flex-wrap">Portfolio</h1>
            <div className="d-flex flex-wrap justify-content-center">
              {cardData.map(project => (
                <PortCard obj={project} key={project.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronPortfolio;
