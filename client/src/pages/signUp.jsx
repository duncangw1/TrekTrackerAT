import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/signUp/signUp";
import HomeIcon from "@material-ui/icons/Home";

const SignUpPage = () => {
  return (
    <div>
      <Link to="/">
        <HomeIcon fontSize="large" />
      </Link>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
