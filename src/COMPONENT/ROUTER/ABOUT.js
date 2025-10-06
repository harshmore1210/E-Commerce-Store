// import React from 'react'

// const ABOUT = () => {
//   return (
//     <div>
//       <h1 style={{backgroundColor:"lightblue",}}>This is AboutUs page </h1>
//       <br/>

//     <img src="https://www.impactplus.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=780&name=best-about-us-pages.jpg"  
//     width="1550px" height="600px"/>
//       <br/>
//       <br/> 

//       <p style={{backgroundColor:"lightblue",}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt voluptates iure, architecto tempora id deleniti. Incidunt esse adipisci doloribus qui quam fugit sint, consequatur aliquid quis facere nostrum distinctio reiciendis neque quas saepe nesciunt a aut tempora recusandae nulla? Aspernatur pariatur repellat excepturi ullam.</p>
//     </div>
//   )
// }

// export default ABOUT

import React from 'react';

const ABOUT = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <img src="https://www.impactplus.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=780&name=best-about-us-pages.jpg" style={styles.img}/>
      <p style={styles.paragraph}>
        Welcome to our E-Commerce Store! We are passionate about providing the best quality products 
        at the most affordable prices. Our collection includes men's clothing, women's clothing, 
        electronics, and jewelry – all carefully selected to ensure customer satisfaction.
      </p>
      <p style={styles.paragraph}>
        Our mission is to make shopping easy and enjoyable. Whether you're looking for the latest fashion trends 
        or the coolest gadgets, we've got you covered.
      </p>
      <p style={styles.paragraph}>
        Thank you for choosing us. We hope you have a great shopping experience!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  img:{
    maxWidth: '400px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.4)',
    marginLeft:"500px",
    // width:"1000px",
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
    borderBottom: '2px solid white',
    paddingBottom: '10px',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};

export default ABOUT;




