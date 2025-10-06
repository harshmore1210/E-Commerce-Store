// // // import React from 'react'

// // // const HOME = () => {
// // //   return (
// // //     <div>
// // //      <h1>I M A HOME PAGE</h1>

// // //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque tenetur libero obcaecati quisquam aut inventore accusamus voluptate, in rem? Vero numquam accusantium delectus culpa blanditiis, consequatur quia animi ipsum recusandae error in ab iste sapiente voluptates. Facilis ratione placeat unde adipisci enim, obcaecati aut.</p>

// // //     </div>
// // //   )
// // // }

// // // export default HOME

// // import React from "react";
// // import DATADetails from "./DATADetails.js";

// // const HOME = () => {
// //   return (
// //     <div style={{display:"flex",justifyContent:"center",gap:25,textAlign:'center',}}>
// //       {DATADetails.map((item) => {
// //         return (
// //           <div style={{border:"2px solid gray"}}>
// //             <h1>{item.id}</h1>
// //             <h1>{item.name}</h1>
// //             <h1>{item.surname}</h1>
// //             <h1>{item.age}</h1>
// //             <button>ADD TO CART</button>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default HOME;

// // import React from "react";
// // // import {DATA} from "./DATADetails"
// // import DATA from "./DATADetails";

// // const HOME = () => {
// //   return (
// //     <div
// //       style={{
// //         display: "grid",
// //         gridTemplateColumns: "250px 250px 250px 250px",
// //         justifyContent: "center",
// //         textAlign: "center",
// //         gap: 20,
// //         alignItem: "center",
// //       }}
// //     >
// //       {DATA.map((nn) => {
// //         return (
// //           <div
// //             style={{
// //               boxShadow:
// //                 "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
// //             }}
// //           >
// //             <h1>{nn.id}</h1>
// //             <br />
// //             <div style={{ lineHeight: 1.9 }}>
// //               <img src={nn.image} style={{ height: 110, width: 220 }} />
// //               {/* <p style={{height:50}}>{nn.title}</p> */}
// //               <p>{nn.title.slice(0,18)}</p>

// //               {/* <h2>{nn.category}</h2> */}
// //               <h2>{nn.price}</h2>
// //               <button style={{ width: "100%", padding: "10px " }}>
// //                 Add To Cart
// //               </button>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default HOME;



import React, { useState } from "react";
// import {DATA} from "./DATADetails"
import DATA from "./DataDetails";
// import CONTEXT from "./Context";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../STORE/Cartslice";
import { Link } from "react-router-dom";
// import SHOP from "./SHOP";
import "../CSS/Home.css"

const HOME = () => {
  let Namess = useSelector((state) => state.cart);
  let Dispatch = useDispatch();

  let ADDTOCART = (nn) => {
    let abc = Namess.find((ww) => ww.id === nn.id);
    if (!abc) {
      Dispatch(add(nn));
    } else {
      alert("Successfully added..😍");
    }
  };

  let [sold, setSold] = useState(DATA);

  let [search, setSearch] = useState("")

  let [selects, setSelects] = useState("")

  let BUTTTTONS = (ee) => {
    let abc = DATA.filter((kk) => kk.category === ee);
    setSold(abc);
  };


  let SEARCHH = (e) => {
    const value = e.target.value.trim().toLowerCase();
  setSearch(value);


  if (value === "") {
    setSold(DATA); // show all if empty
    return;
  }

  let filtered = DATA.filter((dd) => {
    const titleWords = dd.title.toLowerCase().split(/\s+/);      // split by space
    const categoryWords = dd.category.toLowerCase().split(/\s+/);
    
    return titleWords.includes(value) || categoryWords.includes(value);
  });

  setSold(filtered);

    // let aaa = DATA.filter((dd) =>
    //   dd.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //   dd.category.toLowerCase().includes(e.target.value.toLowerCase())
    // )
    // setSold(aaa)
  }



  let SELECTSS = (e) => {
    setSelects(e.target.value)
    let xyz = DATA.filter((kk) => {
      if (e.target.value === "") {
        return true
      } else if (e.target.value === "0-300") {
        return kk.price >= 0 && kk.price <= 300
      } else if (e.target.value === "300-600") {
        return kk.price >= 300 && kk.price <= 600
      } else if (e.target.value === "600-800") {
        return kk.price >= 600 && kk.price <= 800
      } else if (e.target.value === "800-1000") {
        return kk.price >= 800 && kk.price <= 1000
      }
    }

    )
    setSold(xyz)
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          gap: 25,
          marginBottom: 50,
        }}
      >
        <button style={{ padding: "15px 35px" }} onClick={() => setSold(DATA)}>
          All
        </button>
        <button
          style={{ padding: "15px 35px" }}
          onClick={() => BUTTTTONS("men's clothing")}
        >
          men's clothing
        </button>
        <button
          style={{ padding: "15px 35px" }}
          onClick={() => BUTTTTONS("jewelery")}
        >
          jewelery
        </button>
        <button
          style={{ padding: "15px 35px" }}
          onClick={() => BUTTTTONS("electronics")}
        >
          electronics
        </button>
        <button
          style={{ padding: "15px 35px" }}
          onClick={() => BUTTTTONS("women's clothing")}
        >
          women's clothing
        </button>
        <div className="search-bar">
          <input className="search-input" type="search" placeholder="Search heree.." style={{ height: 47, width: 200, }} value={search} onChange={SEARCHH} />
          <button className="search-button">🔍</button>
        </div>

        <select value={selects} onChange={SELECTSS} style={{ padding: "5px 45px" }}>
         
          <option value=""> <label>PRICE</label></option>
          <option value="0-300">0-300</option>
          <option value="300-600">300-600</option>
          <option value="600-800">600-800</option>
          <option value="800-1000">800-1000</option>
        </select>
      </div>


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
        {sold.length === 0 ? <h1>Item Not found</h1> : ""}
        {sold.map((nn) => {
          return (
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
              <Link to={`nn/${nn.id}`}>
                <h1>{nn.id}</h1>
                <br />
                {/* <div style={{ lineHeight: 1.9 }}> */}
                <img src={nn.image} style={{ height: 110, width: 220 }} />
                {/* <p style={{height:50}}>{nn.title}</p> */}
                <p>{nn.title.slice(0, 18)}</p>

                {/* <h2>{nn.category}</h2> */}
                <h2>{ Math.floor(nn.price)} $</h2>
              </Link>
              <button style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "0.6rem 3.2rem",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                
                transition: "background 0.3s ease",
              }}
                onClick={() => ADDTOCART(nn)}
              >
                Add To Cart
              </button>
            </div>
            //  </div> 
          );
        })}
      </div>
    </div>

  );
};
// export let {ADDTOCART}=ADDTOCART.

export default HOME;



// import React from "react";
// import DATA from "./DataDetails";
// // import '../CSS/App.css';

// const HOME = () => {
//   return (
//     <div className="home-container">
//       <div className="search-bar">
//         <input className="search-input" type="text" placeholder="Search..." />
//         <button className="search-button">🔍</button>
//       </div>

//       <div className="card-grid">
//         {DATA.map((item) => (
//           <div key={item.id} className="card">
//             <h1>ID: {item.id}</h1>
//             <h1>Name: {item.name}</h1>
//             <h1>Surname: {item.surname}</h1>
//             <h1>Age: {item.age}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HOME;

