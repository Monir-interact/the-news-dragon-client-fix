import React from "react";
import bg from "../../assets/bg.png";
import { Figure } from "react-bootstrap";
// import "./Ad.css";
import '../../../src/App.css';

const Ad = () => {
  return (
    <div className="text-center position-relative">
      <div className="text-up">
        <h4>Create an Amazing Newspaper</h4>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-danger">Learn More</button>
      </div>
      <div className="">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Ad;
