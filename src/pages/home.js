import React, {Component} from "react";
import NavBar from "../components/navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import "../App.css";


class Home extends Component{
     render(){
          return (
               <div className="App-header">               
                    <NavBar/> 
                    <About/> 
                    <Footer/>
               </div>            
          )
     }
}

export default Home; 