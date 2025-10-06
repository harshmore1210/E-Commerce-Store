import React from "react";
// import {SHOP} from "./SHOPDetails"
import SHOP from "./SHOP";

const ITEMS = () => {
  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "250px 250px 250px 250px",
        justifyContent: "center",
        textAlign: "center",
        gap: 20,
        alignItem: "center",
        backgroundColor:"lightblue"
      }}
    >
      {SHOP.map((nn) => {
        return (
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",backgroundColor:"white",border:"2px solid black"
            }}
          >
            <h1>{nn.id}</h1>
            <br />
            <div style={{ lineHeight: 1.9,border:"0.1px solid black" }}>
              <img src={nn.image} style={{ height: 110, width: 220 }} />
              {/* <p style={{height:50}}>{nn.title}</p> */}
              <p>{nn.title.slice(0,18)}</p>

              {/* <h2>{nn.category}</h2> */}
              <h2>{nn.price}</h2>
              <button style={{ width: "100%", padding: "10px " }}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ITEMS;
