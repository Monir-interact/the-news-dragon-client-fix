import React from "react";
import bg from "../../assets/bg.png";
import { Figure } from "react-bootstrap";

const Ad = () => {
  return (
    <div className="text-center position-relative">
      <Figure className="postion-relative">
        <img src={bg} alt="" />
        <h4>Create an Amazing Newspaper</h4>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-danger">Learn More</button>
      </Figure>
    </div>
  );
};

export default Ad;
