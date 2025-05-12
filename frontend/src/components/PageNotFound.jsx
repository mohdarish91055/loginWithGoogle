import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>404</h1>
      <h3>Oop! Page not found</h3>
      <button onClick={() => navigate("/login")}>back</button>
    </>
  );
};

export default PageNotFound;
