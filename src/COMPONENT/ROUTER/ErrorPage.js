import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>
        <img
          src="https://img.lovepik.com/element/40021/7866.png_1200.png"
          style={{ height: 500, width: 650, marginLeft: 400 }}
        />
      </div>

      <Link to="/">
        <button
          style={{ marginLeft: 650, marginTop: 25, padding: "10px 25px" }}
        >
          GO BACK
        </button>
      </Link>
    </>
  );
};

export default ErrorPage;
