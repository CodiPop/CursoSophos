import React, { Component } from 'react'
import { Contact } from './Contact'
import ProfilePic from "./ProfilePic"
import { IconBar } from './IconBar'



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      info1:"Seleccione una opcion",
      info2:""
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
