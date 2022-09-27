import React, { Component } from 'react'

import ItemUser from '../components/ItemUser'
import Title from '../components/Title'
import UserForm from '../components/UserForm'
export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: "Santiago",
          pais: "Colombia",
          correo: "sguerreroa@uninorte.edu.co"
        }
      }
      handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        
      }
  render() {
    return (
      <div>
        
        <Title text="Ingrese tu propio usuario"/>
        <ItemUser user={this.state}/>
        <br></br>
        <UserForm onChange={this.handleChange} user={this.state}/> 
        
      </div>
    )
  }
}

export default Form