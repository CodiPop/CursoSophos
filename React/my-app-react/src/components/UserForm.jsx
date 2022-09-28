import { FormControl, FormHelperText, InputLabel, Input } from "@mui/material";
import React from "react";
import "./Styles/UserForm.css";

const UserForm = (props) => {
  const { name, pais, correo } = props.user;
  return (
    <div>
      <form className="form">
        <FormControl fullWidth>
          <InputLabel>Nombre:</InputLabel>
          <Input
            type="text"
            name="name"
            onChange={props.onChange}
            value={name}
          ></Input>
          <FormHelperText>Soy un mensaje de ayuda</FormHelperText>
        </FormControl>
        <br></br>
        <br></br>

        <FormControl fullWidth>
          <InputLabel>Pais:</InputLabel>
          <Input
            type="text"
            name="pais"
            onChange={props.onChange}
            value={pais}
          ></Input>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl fullWidth>
          <InputLabel>Correo:</InputLabel>
          <Input
            type="text"
            name="correo"
            onChange={props.onChange}
            value={correo}
          ></Input>
        </FormControl>
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default UserForm;
