import React, { Component } from 'react'
import { Contact } from './Contact'
import ProfilePic from "./ProfilePic"
import { IconBar } from './IconBar'


const data = {
  nombre: "Santiago",
  correo: "sguerreroa@uninorte.edu.co",
  cumpleanos: "Colombia",
  direccion:"Mz T Casa 6, Concepcion 2",
  telefono:"3003776513",
  contrasena:"123456789"
  
};

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      info1:"validando",
      info2:"xd"
    }
  }

  handleClick = (e) =>{
    this.setState({
      info1:e.currentTarget.name,
      info2:e.currentTarget.value
    })

  }


  render() {


    return (
      <React.Fragment>
      <ProfilePic/>
      <Contact user={this.state}/>
      <IconBar onClick={this.handleClick} user={this.data} />

  </React.Fragment>
    )
  }
}
