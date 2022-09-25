import React, { Component } from 'react'
import "./Styles/UserForm.css"
export class UserForm extends Component {

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
        <h2 className='title-form'>Nuevo Usuario</h2>
        <form className='form' onSubmit={this.handleSubmit}>
            <div className='input-form'>
                <label>Nombre:</label>
                <input type="text" name="name" onChange={this.props.onChange} value={name}></input>

            </div>
            <div className='input-form'>
                <label>Pais:</label>
                <input type="text" name="pais" onChange={this.props.onChange} value={pais}></input>

            </div>
            <div className='input-form'>
                <label>Correo:</label>
                <input type="text" name="correo" onChange={this.props.onChange} value={correo}></input>

            </div>
            <button >Agregar</button>

        </form>


      </div>
    )
  }
}

export default UserForm