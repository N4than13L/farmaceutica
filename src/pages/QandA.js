import React, {Component} from "react";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";

import "../App.css";

class QandA extends Component{
     constructor(props){
          super(props);
          this.state = {value: ''};
     }

     render(){
          return(
               <section className="box">
                    <h1 className="subtitle">{this.setState.value = 'What is Lorem Ipsum?'}</h1>
                    <p>{this.setState.value = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}</p>
                    <br/>
                    <h1 className="subtitle">{this.setState.value = 'Why do we use it?'}</h1>
                    <p>
                         {this.setState.value = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'}
                    </p>
                    <br/>
                    <h1 className="subtitle">{this.setState.value = 'Where does it come from?'}</h1>
                    <p>
                         {this.setState.value = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'}
                    </p>
                    <br/>
                    <h1 className="subtitle">{this.setState.value = 'Where can I get some?'}</h1>
                    <p>
                         {this.setState.value = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"}
                    </p>
               </section>
          );
     }
}

class Questions extends Component{
     render(){
          return(
               <section className="">
                    <NavBar/>
                    <br/>
                    <br/>
                    <br/>
                    <QandA/>
                    <br/>
                    <Footer/>
               </section>
          )
     }
}

export default Questions;



