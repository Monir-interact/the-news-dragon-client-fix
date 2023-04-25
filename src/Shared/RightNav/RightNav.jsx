import React from 'react';
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login with GitHub
      </Button>
      <div>
        <h4>Find Us on</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook/>  Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone/>
    </div>
  );
};

export default RightNav;
