import Router from './router'

import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
//import Login from "./components/Login"
import Contact from "./components/Contact";
import Finalizo from "./components/Finalizo";

// const App = () => {
//   return (
//     <div>
//         <Router/>
//     </div>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        {/* <Login data={this.state.resumeData.main} /> */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
        <Router/>
        {/* <Finalizo data={this.state.resumeData.main} /> */}
      </div>
    );
  }
}

export default App