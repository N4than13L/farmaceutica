import React from "react";
import "../App.css";


class Footer extends React.Component {
     constructor(props){
          super(props);
          this.state = {Value: " "};
     }
     render(){
          return(
               <footer className="footer">
               <div class="content has-text-centered">
                    <p className="title">
                          Aplicacion creada por: <b>José Nathaniel Bonilla</b></p>

               </div>
             </footer>
               )
     }
}

export default Footer;