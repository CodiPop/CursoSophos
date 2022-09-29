import React, { useState, useEffect } from "react";
import ItemUser from "../components/ItemUser";
import Title from "../components/Title";
//import userList from "../data";
import axios from "axios";
const Lista = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users")
      const{data}= response
      setUsers(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
  getData()
},[])

  return (
    <React.Fragment>
      <Title text="Lista de usuarios" />
      {users.map((item, index) => (
        <ItemUser key={index} user={item} isEdit isDelete />
      ))}
    </React.Fragment>
  );
};

export default Lista;
