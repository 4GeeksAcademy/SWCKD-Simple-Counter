//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


Home.PropTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;
//render your react application

setInterval(() => {
    const FOUR = Math.floor(counter/1000);
    const THREE = Math.floor(counter/100);
    const TWO = Math.floor(counter/10);
    const ONE = Math.floor(counter/1);
       counter++;

    ReactDOM.render(<Home digitOne = {ONE}  digitTwo = {TWO} digitThree = {THREE} digitFour = {FOUR}/>, document.querySelector("#app"));
}, 1000);
