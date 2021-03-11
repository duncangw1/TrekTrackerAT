import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <small>Main Page</small>
      <h3>Welcome to TrekTracker AT Edition</h3>
      <br />
      <Link to="/signIn">Sign In</Link>
      <br />
      <Link to="/signUp">Sign Up</Link>
    </div>
  );
};

export default MainPage;
