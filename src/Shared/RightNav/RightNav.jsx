import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub/> Login with GitHub</Button>
    </div>
  );
};

export default RightNav;
