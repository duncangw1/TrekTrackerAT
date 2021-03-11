import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../components/signIn/signIn";
import HomeIcon from "@material-ui/icons/Home";

const SignInPage = () => {
  return (
    <div>
      <Link to="/">
        <HomeIcon />
      </Link>
      <SignIn />
    </div>
  );
};

export default SignInPage;
