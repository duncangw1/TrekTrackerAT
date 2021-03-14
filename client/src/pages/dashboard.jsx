import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../components/dashboard/dashboard";

const MainPage = () => {
  return (
    <div>
      <Dashboard />
      <Link to="/">Main Page</Link>
    </div>
  );
};

export default MainPage;
