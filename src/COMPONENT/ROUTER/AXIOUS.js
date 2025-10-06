import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AXIOUS = () => {

  let [datas,setDatas]=useState([])
  let [isError,setIsError]=useState('')


  useEffect(()=>{
    axios

    .get("https://fakestoreapi.com/products")
    .then((res)=>setDatas(res.data))
    .catch((err)=>setIsError(err.message))

  },[])
  return (
    <div>
      

      <table style={{border:'2px solid red',width:'100%',textAlign:'center'}}>
        <thead>
          <tr>
            <th style={{border:'2px solid red'}}>ID</th>
            <th style={{border:'2px solid red'}}>TITLE</th>
            <th style={{border:'2px solid red'}}>PRICE</th>
            <th style={{border:'2px solid red'}}>IMAGE</th>
          </tr>
        </thead>


        <tbody>
          {isError && <h1>{isError}</h1>}
          {!isError &&  

          datas.map((ss)=>{
            return(
              <tr>
                <td style={{border:'2px solid red'}}>{ss.id}</td>
                <td style={{border:'2px solid red'}}>{ss.title}</td>
                <td style={{border:'2px solid red'}}>{ss.price}</td>
                <td style={{border:'2px solid red'}}><img src={ss.image} style={{height:70}}/></td>
              </tr>
            )
          })}
        </tbody>
      </table>




    </div>
  )
}

export default AXIOUS
