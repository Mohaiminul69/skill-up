import React from "react";
import { Link, useHistory } from "react-router-dom";
import notFoundImg from "../../img/page-found-concept-illustration_114360-1868.jpg";

const NotFound = () => {
  const history = useHistory();
  const handleBackClick = () => {
    history.goBack();
  };
  return (
    <div className="text-center pb-5">
      <img style={{ width: "40%" }} src={notFoundImg} alt="" />
      <br />
      <Link to="/home">
        <button className="btn btn-orange me-4">Home</button>
      </Link>
      <button onClick={handleBackClick} className="btn btn-orange">
        Back
      </button>
    </div>
  );
};

export default NotFound;
