import React, { useContext } from 'react'
// import DATA from './DataDetails';
// import CONTEXT from './Context';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, remove } from "../STORE/Cartslice";
import { Link } from 'react-router-dom';
import SinglePage from "./SinglePage";


const CART = () => {

  let NAMESS = useSelector((state) => state.cart);
  let Dispatch = useDispatch();

  let REMOVE = (nnId) => {
    Dispatch(remove(nnId));
  };

  let INCREMENT = (nnId) => {
    Dispatch(increment(nnId))
  }


  let DECREMENT = (nnId) => {
    Dispatch(decrement(nnId))
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "250px 250px 250px 250px",
        justifyContent: "center",
        textAlign: "center",
        gap: 20,
        alignItem: "center",
      }}
    >

      {NAMESS.length === 0 ? <h1>Your cart is empty</h1> : ""}
      {NAMESS.map((nn) => {

        let FINAL = nn.quantity * Math.floor(nn.price)

        let handleButton = () => {
          if (nn.quantity > 1) {
            Dispatch(decrement(nn.id))
          }
          else {
            Dispatch(remove(nn.id));

          }
        }
        // let FINAL = (nn.quantity ?? 1) * nn.price;


        return (
          // <Link to={`/nn/${nn.id}`} >
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              background: "linear-gradient(135deg,rgb(26, 0, 170),rgb(2, 141, 90))",
              borderRadius: "12px",
              // boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              // padding: "1rem",
              color: "#fff",
              textAlign: "center",
              transition: "transform 0.3s ease",

            }}
          >
            <h1>{nn.id}</h1>
            <br />
            <div style={{ lineHeight: 1.9 }}>
              <img src={nn.image} style={{ height: 110, width: 220 }} />
              {/* <p style={{height:50}}>{nn.title}</p> */}
              <p>{nn.title.slice(0, 18)}</p>

              <h2>{FINAL}</h2>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15, textAlign: 'center' }}>
                <button
                  style={{ width: "100%", padding: "10px " }}
                  onClick={handleButton}
                >
                  {
                    nn.quantity > 1 ? (<i class="fa-solid fa-minus"></i>) : (
                      <i class="fa-solid fa-trash"></i>)
                  }

                </button>


                <h1>{nn.quantity}</h1>


                <button
                  style={{ width: "100%", padding: "10px " }}
                  onClick={() => INCREMENT(nn.id)}
                >
                  +
                </button>
              </div>
              
              <button
                style={{ width: "100%", padding: "10px " }}
                onClick={() => REMOVE(nn.id)}
              >
                Remove To Cart
              </button>
            </div>
          </div>

          // </Link>
        );
      })}
    </div>
  )
}

export default CART