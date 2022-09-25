import React from 'react'
import ItemUser from "./ItemUser";
import Title from "./Title";
import UserCount from './UserCount';
import UserForm from './UserForm';

const data = {
  name: "Santiago",
  pais: "Colombia",
  correo: "sguerreroa@uninorte.edu.co"
};



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      pais: "",
      correo: ""
    }
  }
  handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
    
  }
  render() {
    return (
      <React.Fragment>

      <Title  />
      <ItemUser user={this.state}/>
      <UserForm onChange={this.handleChange} user={this.state}/> 
      </React.Fragment>
    )
  }
}


