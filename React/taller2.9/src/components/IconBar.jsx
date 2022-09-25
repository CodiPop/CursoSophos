import React, { Component } from 'react'
import "./styles/IconBar.css"
import { IoPersonOutline,IoMailOutline,IoNewspaperOutline,IoMapOutline,IoPhonePortraitOutline,IoLockClosedOutline } from "react-icons/io5";

const data = {
  nombre: "Santiago Alberto Guerrero Martinez",
  correo: "Sguerreroa@uninorte.edu.co",
  cumpleanos: "Colombia",
  direccion:"Mz T Casa 6, Concepcion 2",
  telefono:"3003776513",
  contrasena:"123456789"
  
};


export class IconBar extends Component {


 constructor(props){
  super(props)
 }
  handleClick = (e) =>{
    console.log(e)
}


  render() {
    const email = data.correo
    const {nombre,correo,cumpleanos,direccion,telefono,contrasena} = data;
    console.log(nombre)
    return (
      <React.Fragment>
          <div className='bar'>
          
          <button onClick={this.props.onClick} name="Mi nombre es," value={nombre} className="btn"><IoPersonOutline className='icono'/></button>
          <button onClick={this.props.onClick} name="Mi correo es," value={email} className="btn"><IoMailOutline className='icono' /></button>
          <button onClick={this.props.onClick} name="Mi cumpleanos es," value={cumpleanos} className='btn'><IoNewspaperOutline className='icono' /></button>
          <button onClick={this.props.onClick} name="Mi direccion es," value={direccion} className='btn'><IoMapOutline className='icono' /></button>
          <button onClick={this.props.onClick} name="Mi numero es," value={telefono} className='btn'><IoPhonePortraitOutline className='icono' /></button>
          <button onClick={this.props.onClick} name="Mi contrasena es," value={contrasena} className='btn'><IoLockClosedOutline className='icono' /></button>
  
          </div>
          
          
          
  
  
  
      </React.Fragment>
    )
  }
}
