import React , { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import CONTEXT from "./Context";

const NAVBAR = () => {
  // let { sold } = useContext(CONTEXT);

  // let Finalprice = Math.floor(sold.reduce((aa, bb) => aa + bb.price, 0));

  let Names = useSelector((state) => state.cart)
  let Dispatch = useDispatch()

  let [discount,setDiscount]=useState(0)

  let FINALPRICE = Math.floor(Names.reduce((aa, bb) => aa + bb.price * bb.quantity, 0));

  useEffect(()=>{
    // if(FINALPRICE > 350){
    //   setDiscount(0.3)
    // }else if (FINALPRICE >150){
    //   setDiscount(0.2)
    // }else if (FINALPRICE >50){
    //   setDiscount(0.1)
    // }

    if (FINALPRICE > 1000) {
      setDiscount(0.1);  // 10%
    } else if (FINALPRICE > 500) {
      setDiscount(0.08); // 8%
    } else if (FINALPRICE > 200) {
      setDiscount(0.05); // 5%
    } else if (FINALPRICE > 100) {
      setDiscount(0.03); // 3%
    } else if (FINALPRICE > 50) {
      setDiscount(0.02); // 2%
    }

    
  },[Names])


  
  

  let MAINTOTAL=  Math.floor(FINALPRICE -FINALPRICE * discount)


  return (
    <div className='mmm'>
      <Link to="/">HOME</Link>
      <Link to="about">ABOUT</Link>
      <Link to="contact">CONTACT</Link>
      {/* <Link to="items">ITEMS</Link> */}
      <Link to="cart">CART {Names.length}</Link>
      <Link to="#">TOTAL PRICE:{FINALPRICE}$</Link>
<Link to="#">DISCOUNT PRICE:{ Math.floor(FINALPRICE * discount)}$</Link>
      <Link to="#">MAIN PRICE:{MAINTOTAL}$</Link>
      {/* <Link to="form">FORM</Link> */}
    </div>
  )
}

export default NAVBAR
