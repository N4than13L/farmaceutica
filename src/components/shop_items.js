import React from "react";
import "../App.css"

class Shop_items extends React.Component{
     render(){
          return(
               <section className="organizer">
                              <div className="box">
                              <p className="title">
                                   Pastilas
                              </p>
                              <img className="image" src="https://imagenes.heraldo.es/files/image_990_v1/uploads/imagenes/2021/07/25/foto-de-archivo-de-un-frasco-de-pastillas.jpeg"/>
                              <br/>
                              <button className="button is-danger">Ir </button>
                         </div>

                 
                         <div className="box">
                              <p className="title">
                              Corticosteroides.
                              </p>
                              <img className="image" 
                              src="https://www.elblogdelasalud.info/wp-content/uploads/2018/08/Medicamentos-con-corticosteroides.jpg"/>
                              <br/>
                              <button className="button is-danger">Ir </button>
                         </div>
              
                         <div className="box">
                              <p className="title">
                              Antirreumáticos Modificadores de la Enfermedad (FARME)
                              </p>
                              <img className="image" 
                              src="https://cdn.reuma.pro/wp-content/uploads/2018/02/medicamentos-fame.jpg"/>
                              <br/>
                              <button className="button is-danger">Ir </button>
                         </div>
     
                         <div className="box">
                              <p className="title">
                                   Jarabes
                              </p>
                              <img className="image" 
                              src="https://cdn.pixabay.com/photo/2017/07/31/11/55/cough-syrup-2557629_960_720.jpg"/>
                              <br/>
                              <button className="button is-danger">Ir </button>
                         </div>
    
               </section>
          )
     }
}

export default Shop_items;