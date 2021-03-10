import React from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  return (
    <div>
      <small>Users page</small>
      <h3>List of Users:</h3>
      <ul>
        {[
          "Doc Holliday",
          "Cabbage Patch",
          "Just Jeff",
          "Burrito",
          "The Professor",
        ].map((user, idx) => {
          return <li key={idx}>{user}</li>;
        })}
      </ul>
      <br />
      <Link to="/">Back to Main page</Link>
    </div>
  );
};

export default UsersPage;
