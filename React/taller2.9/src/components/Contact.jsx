import "./styles/Contact.css"
import React, { Component } from 'react'



export class Contact extends Component {

  constructor(props){
    super(props)

    this.state={
      info1: "",
      info2: ""
    }
  }
  
  render() {

    const {info1,info2} = this.props.user;
    return (
      <div className='info'>
      <p className='title'>{info1}</p>
      <h2>{info2}</h2>
      
  </div>
    )
  }
}

export default Contact