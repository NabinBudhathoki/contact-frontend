import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
    <div className="notfound">
    <h1>404 page not found</h1>
    <NavLink to="/">Back to Home page</NavLink>
    </div> 
    </>
  );
};

export default Errorpage;
