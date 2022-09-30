import { Box } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        const { results } = response.data;
        setUsers(results);
        console.log(response);
      } catch (error) {
        setLoading(true);
        setError(error.message);
      }
    };
    getData();
  }, []);

  return (
    <React.Fragment>
      <Box >{users.map((item,index) => (
        <SingleUser key={index} {...item}/>
      ))}


      </Box>
    </React.Fragment>
  );
};

export default UserList;
