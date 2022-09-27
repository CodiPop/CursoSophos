import React, { Component } from "react";

import ItemUser from "../components/ItemUser";
import Title from "../components/Title";
import userList from "../data";

export class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userList,
    };
  }

  render() {
    return (
      <React.Fragment>
        
        <Title text="Lista de usuarios" />
        {this.state.users.map((item, index) => (
          <ItemUser key={index} user={item}/>
        ))}

        
      </React.Fragment>
    );
  }
}

export default Lista;
