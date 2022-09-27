import { FormControl, FormHelperText, InputLabel, Input, CircularProgress } from '@mui/material'
import React, { Component } from 'react'
import "./Styles/UserForm.css"
export class UserForm extends Component {
    state ={
        loading:true
    }
    constructor(props){
    super(props)
    this.state = {
        name:"",
        pais:"",
        correo:""
    }
}


    handleChange = (e) =>{
    
        console.log(e.target.valor)
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onChange(this.state)
        
    }



  render() {
    const {name,pais,correo} = this.props.user;
    return (
      <div>
        
        <form className='form' onSubmit={this.handleSubmit}>
            <FormControl fullWidth>
                <InputLabel>Nombre:</InputLabel>
                <Input type="text" name="name" onChange={this.props.onChange} value={name}></Input>
                <FormHelperText>Soy un mensaje de ayuda</FormHelperText>
            </FormControl>
            <br></br>
            <br></br>
            
            <FormControl fullWidth>
                <InputLabel>Pais:</InputLabel>
                <Input type="text" name="pais" onChange={this.props.onChange} value={pais}></Input>

            </FormControl>
            <br></br><br></br>
            <FormControl fullWidth>
                <InputLabel>Correo:</InputLabel>
                <Input type="text" name="correo" onChange={this.props.onChange} value={correo}></Input>

            </FormControl>
            <br></br><br></br>
            

            {this.state.loading && <CircularProgress/>}

        </form>


      </div>
    )
  }
}

export default UserForm