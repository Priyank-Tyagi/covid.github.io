import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Banner from "./banner.png";
import Details from "./Details";
import Footer from "./footer";
import AOS from 'aos';
import $ from "jquery";
// export default {
//   Banner
// }
const hasWindow = (typeof window !== 'undefined') ? true : false;
if (hasWindow) {
	window.loader = true
}


function App() {
  AOS.init({
    duration : 1000
  })
  
  return (
    <div className="App">
       <div className="banner">
           {/* <Image source="{require('./images/banner.png')}"></Image> */}
          
           {/* <img src="{Banner}" alt="banner" /> */}
           <img src="https://i.ibb.co/D5H5jcb/volodymyr-hryshchenko-XLNo-18vq-Dg-unsplash-1.jpg" alt="banner" />
           
       </div>
       <Details></Details>
      <Footer></Footer>
    </div>
  );
}

export default App;
