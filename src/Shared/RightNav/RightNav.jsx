import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import Ad from "../Ad/Ad";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button variant="outline-primary" className="mb-2">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login with GitHub
      </Button>
      <div>
        <h4 className="mt-4">Find Us on</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone />
      </div>
      <div>
        <Ad />
      </div>
    </div>
  );
};

export default RightNav;
