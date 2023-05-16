import React from "react";
import NavBar from "../components/navbar";
import Shop_items from "../components/shop_items";

import Footer from "../components/Footer"; 

import "../App.css";

class Shop extends React.Component{
     render(){
          return(
               <section>
                    <NavBar/>
                    <Shop_items/>
                    <br/>
                    <br/>
                    <br/>
                    <Footer/>
               </section>
          )
     }
}

export default Shop