import React from "react";

import "../App.css";


class About extends React.Component{
     constructor(props){
          super(props);
          this.state = {value: " " };
     }
     render(){
          return(
               <section className="organizer">
                    <section className="box">
                         <p className="title">{this.value = "Historia"}</p>
                         
                         <div className="">
                              <p className="">
                              {
                                   this.state.value = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                              }
                              </p>
                         </div>

                    </section>  

                    <section className="box">
                         <p className="title">{this.value = "Mision"}</p>
                         
                         <div className="">
                              <p className="">
                              {
                                   this.state.value = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                              }
                              </p>
                         </div>
                         
                    </section> 

                    <section className="box">
                         <p className="title">{this.value = "Vision"}</p>
                         
                         <div className="">
                              <p className="">
                              {
                                   this.state.value = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                              }
                              </p>
                         </div>
                         
                    </section> 
               
               </section>
               
          )
     }
}

export default About;