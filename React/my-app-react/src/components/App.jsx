import React from 'react'
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Form from '../pages/Form';
import Lista from '../pages/Lista';
import User from "../pages/User";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

export default class App extends React.Component {
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

      <React.Fragment>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Form" element={<Form/>}/>
            <Route exact path="/Lista" element={<Lista/>}/>
            <Route exact path="/User/:1" element={<User/>}/>
            
          </Routes>
        </Layout>
      </Router>
      
      </React.Fragment>
    )
  }
}


