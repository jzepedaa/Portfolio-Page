import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar.js"
import About from "./components/about"
import JumbotronPortfolio from "./components/portfolio/jumbotronPortfolio.js";
import Footer from "./components/footer.js";

document.body.style = "background-color: #153243;"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <About />
          <JumbotronPortfolio />
          <div style={{ marginTop: 40 }}>
            <Footer />
          </div>

        </div>
      </div>
    )
  }

}
export default App;
