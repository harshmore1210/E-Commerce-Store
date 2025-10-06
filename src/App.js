// import React from "react";
// import Home from "./COMPONENT/Pages/Home";
// import About from "./COMPONENT/Pages/About";
// import Contact from "./COMPONENT/Pages/Contact";
// import Navbar from "./COMPONENT/Pages/Navbar";
// import Props1 from "./COMPONENT/Props/Props1";
// import Destructing from "./COMPONENT/Props/Destructing";
// import State1 from "./COMPONENT/Hooks/UseState/State1";
// import State2 from "./COMPONENT/Hooks/UseState/State2";
// import State3 from "./COMPONENT/Hooks/UseState/State3";
// import Counter from "./COMPONENT/Counter";
// import Validation from "./COMPONENT/Validation";
// import FormValidation from "./COMPONENT/FormValidation";

// const App = () => {
//   return (
//     <div>
//       {/* <About/>
//      <Home/>
//      <Contact/>
//      */}

//       {/* <Home />
//       <Navbar /> */}
// {/* 

//       <Props1 name="Niki" surname="Patel"/>
//       <Props1 name="Vidhisa" surname="Shah"/>
//       <Props1/> */}

//       {/* <Destructing name="Niki" surname="Patel"/> */}
//       {/* <State1/> */}
//       {/* <State2/> */}
//       {/* <State3/> */}
//       {/* <Counter/> */}
      
//       {/* <Validation/> */}
//       <FormValidation/>
//     </div>
//   );
// };

// export default App;




// import React, { useState } from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import HOME from './COMPONENT/ROUTER/HOME'
// import ABOUT from './COMPONENT/ROUTER/ABOUT'
// import CONTACT from './COMPONENT/ROUTER/CONTACT'
// import ITEMS from './COMPONENT/ROUTER/ITEMS'
// import CART from "./COMPONENT/ROUTER/CART";
// import FORM from './COMPONENT/ROUTER/FORM'
// import NAVBAR from './COMPONENT/ROUTER/NAVBAR'
// import ErrorPage from './COMPONENT/ROUTER/ErrorPage'
// import CONTEXT from "./COMPONENT/ROUTER/Context";

// const App = () => {

//   let [sold, setSold] = useState([]);

//   let ADDTOCART = (item) => {
//     let abc = sold.find((ss) => ss.id === item.id);
//     if (!abc) {
//       setSold([...sold, item]);
//     } else {
//       alert("succsessfully added once...😍");
//     }
//   };

//   let REMOVETOCART = (value) => {
//     let removee = sold.filter((kk) => kk.id !== value);
//     setSold(removee);
//   };


//   return (
//     <div>
//       <CONTEXT.Provider value={{ sold, setSold, ADDTOCART, REMOVETOCART }}>


//       <BrowserRouter>
//       <NAVBAR/>
//       <Routes>
//         <Route path='/' element={<HOME/>}/>
//         <Route path='about' element={<ABOUT/>}/>
//         <Route path='contact' element={<CONTACT/>}/>
//         <Route path='items' element={<ITEMS/>}/>
//         <Route path="cart" element={<CART/>} />
//         <Route path='*' element={<ErrorPage/>}/>
//         <Route path='form' element={<FORM/>}/>
        
//       </Routes>
     
//       </BrowserRouter>

//       </CONTEXT.Provider>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import AA from './COMPONENT/Hooks/UseContext/AA'
// import DEMO from './COMPONENT/Hooks/UseContext/Context'

// const App = () => {

//   let color="Black"
//   let car="Verna"
//   return (
//     <div>


//       <DEMO.Provider value={{color,car}}>
//       <AA/>
//       </DEMO.Provider>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import AXIOUS from './COMPONENT/ROUTER/AXIOUS'

// const App = () => {
//   return (
//     <div>
//       <AXIOUS/>
//     </div>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOME from "./COMPONENT/ROUTER/HOME";
import ABOUT from "./COMPONENT/ROUTER/ABOUT";
import CONTACT from "./COMPONENT/ROUTER/CONTACT";
import CART from "./COMPONENT/ROUTER/CART";
import NAVBAR from "./COMPONENT/ROUTER/NAVBAR";
 import ITEMS from './COMPONENT/ROUTER/ITEMS'

import ErrorPage from "./COMPONENT/ROUTER/ErrorPage";
import { Provider } from "react-redux";
import Store from "./COMPONENT/STORE/Store";
import SinglePage from "./COMPONENT/ROUTER/SinglePage";

const App = () => {
  return (
    <div>

  <Provider store={Store}>
      <BrowserRouter>
        <NAVBAR />
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="about" element={<ABOUT />} />
          <Route path="contact" element={<CONTACT />} />
          <Route path="cart" element={<CART />} />
          <Route path='items' element={<ITEMS/>}/>

          <Route path="*" element={<ErrorPage />} />

          <Route path="nn/:id" element={<SinglePage />} />
          
        </Routes>
      </BrowserRouter>
      </Provider>
    
    </div>
  );
};

export default App;