import React, { useState } from "react";

import ItemUser from "../components/ItemUser";
import Title from "../components/Title";
import userList from "../data";

const Lista = () => {
  const [users, setUser] = useState(userList);

  return (
    <React.Fragment>
      <Title text="Lista de usuarios" />
      {users.map((item, index) => (
        <ItemUser key={index} user={item} />
      ))}
    </React.Fragment>
  );
};

export default Lista;
