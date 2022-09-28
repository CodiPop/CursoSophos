
import ItemUser from "../components/ItemUser";
import Title from "../components/Title";
import UserForm from "../components/UserForm";
import React, { useState } from "react";

const Form = () => {
  const intialState = {
    name: "Santiago",
    pais: "Colombia",
    correo: "sguerreroa@uninorte.edu.co",
  };

  const [user, setUser] = useState(intialState);

  const handleChange = (e) => {
    setUser({...user,[e.target.name]: e.target.value,});
  };

  return (
    <div>
      <Title text="Ingrese tu propio usuario" />
      <ItemUser user={user} />
      <br></br>
      <UserForm onChange={handleChange} user={user} />
    </div>
  );
};

export default Form;
