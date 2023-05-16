import React,{Component} from "react";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";

import "../App.css";

class Contact extends Component{
     constructor(props) {
          super(props);
          this.state = {value: ''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }

        handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }

        
      
        render() {
          return (
               <section>
               <NavBar/>
               
               <br/>
               <br/>
               <br/>
               <br/>

               <form onSubmit={this.handleSubmit}>
                    <label className="subtitle">
                         Name:
                         <input className="input is-link"
                         type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label className="subtitle">
                         Email
                         <input className="input is-link"
                         type="text" value={this.setState.value} />
                    </label>
                    <br/>
                    <label className="subtitle">
                         Mesnsaje
                         <input className="input is-link is-large"
                         type="text" value={this.setState.value} />
                    </label>

                    <br/>
                    <br/>

                    <input className="button is-info" type="submit" value="Submit" />
            </form>
            <Footer/>
               </section>
            
          )
        };
}

export default Contact;