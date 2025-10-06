import React, { useState } from "react";

const Validation = () => {
  let [text, setText] = useState("");
  let [num, setNum] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [isError, setIsError] = useState(false);


  let SUBMIT=(e)=>{
    e.preventDefault()


    if(text.length===0 || num.length===0 || email.length===0 || pass.length===0){
      setIsError(true)
    }else{
      setIsError(false)
      setText("")
      setNum("")
      setEmail("")
      setPass("")
    }
 

  }

  return (
    <div
      style={{
        width: 300,
        border: "2px solid gray",
        textAlign: "center",
        padding: 25,
        margin: "25px auto",
      }}
    >
      <form onSubmit={SUBMIT}>
        <input
          type="text"
          placeholder="enter name here.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {isError && text.length===0 ? <h6>Plz fill this filed</h6> : ""}
        <br /> 
      
        <input
          type="number"
          placeholder="enter number here.."
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
         {isError && num.length===0 ? <h6>Plz fill this filed</h6> : ""}
        <br /> 
      
        <input
          type="email"
          placeholder="enter email here.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         {isError && email.length===0 ? <h6>Plz fill this filed</h6> : ""}
        <br />
        
        <input
          type="password"
          placeholder="enter password here.."
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
         {isError && pass.length===0 ? <h6>Plz fill this filed</h6> : ""}

        <br />
        <br />
        <button>CLICK ME</button>
      </form>
    </div>
  );
};

export default Validation;
