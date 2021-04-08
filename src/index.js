import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/lib/bootstrap/css/bootstrap.min.css";
import "./assets/lib/font-awesome/css/font-awesome.min.css";
import "./assets/lib/animate/animate.min.css";
import "./assets/css/style.css";
import "./assets/css/login.css";
import "./assets/css/parent.css";
import "./assets/css/teacher.css";
import "./assets/css/responsive.css";
import "./assets/css/details.css";
import "./assets/css/all_students.css";
// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';
// import "./assets/lib/jquery/jquery.min.js";
// import "./assets/lib/bootstrap/js/bootstrap.min.js";
// import "./assets/lib/wow/wow.min.js";
// import "./assets/lib/appear/jquery.appear.js";
const currentHost = window.location.pathname;

// console.log(currentHost.replace(/\//g, ""));
var element = document.getElementById("root");
element.classList.add(`${currentHost.replace(/\//g, "")}-page`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
