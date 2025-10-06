import React from "react";
import { useParams } from "react-router-dom";
// import { ADDTOCART } from "./HOME";
import DATA from "./DataDetails";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../STORE/Cartslice";

const SinglePage = () => {

  let { id } = useParams()

  let Namess = useSelector((state) => state.cart);
  let Dispatch = useDispatch();

  let nn = DATA.find((ss) => ss.id == Number(id))
  let ADDTOCART = (nn) => {
    let abc = Namess.find((ww) => ww.id === nn.id);
    if (!abc) {
      Dispatch(add(nn));
    } else {
      alert("Successfully added..😍");
    }
  };

  return (
    <div style={{

      // width: 600, border: "2px solid gray", margin: '100px auto', padding: 10, backgroundColor: "lightblue"
      // background: "linear-gradient(135deg, #dff6ff, #8ec5fc)", // Light blue to sky gradient
      background: "linear-gradient(135deg,rgb(26, 0, 170),rgb(2, 141, 90))",
      borderRadius: "12px",
      borderRadius: "16px",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
      padding: "2rem",
      // color: "#1a1a1a",
      maxWidth: "600px",
      margin: "2rem auto",
      fontFamily: "'Segoe UI', sans-serif",
      color: "white",
      lineHeight: "1.6",
      marginBottom: "1rem",
    }}>
      <h1 style={{
        textAlign: 'center', fontSize: 45,

        fontSize: "2rem",
        color: "white",
        textAlign: "center",
        marginBottom: "1rem",


      }}>{nn.id}</h1>
      {/* <hr /> */}
      <img src={nn.image} style={{

        height: 250, width: 320, marginLeft: 150, backgroundColor: "lightblue",
        display: "block",
        margin: "1rem auto",
        maxWidth: "200px",
        borderRadius: "12px",
      }} />
      <br />
      <h1 style={{
        fontWeight: "bold",
        color: "#white", fontSize: "1.5rem",
        fontWeight: "bold",
      
        textAlign: "center",
        margin: "1rem 0",
      }}>{nn.title}</h1>
      <br />
      <br />
      <div style={{ lineHeight: 1.6 }}>
        <h2><span style={{ fontWeight: 900, color: "red" }}>PRIZE: </span>{nn.price}</h2>
        <h2><span style={{ fontWeight: 900, color: "red" }}>CATEGORY: </span>{nn.category}</h2>
        <h2><span style={{ fontWeight: 900, color: "red" }}>DESCRIPITION: </span>{nn.description}</h2>

        <h2><span style={{ fontWeight: 900, color: "red" }}>RATE: </span>{nn.rating.rate}</h2>
        <h2><span style={{ fontWeight: 900, color: "red" }}>COUNT: </span>{nn.rating.count}</h2>

      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => ADDTOCART(nn)} style={{

          // padding: "10px 25px"
          backgroundColor: "#007bff",
          color: "white",
          padding: "0.6rem 3.2rem",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",

          transition: "background 0.3s ease",




        }}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default SinglePage;
