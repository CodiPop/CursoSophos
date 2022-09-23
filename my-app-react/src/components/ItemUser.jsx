import React from "react";

const user = {
  name: "Angela",
  pais: "Colombia",
  correo: "moralessa@uninorte.edu.co",
};
class ItemUser extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <p>
          <strong>Nombre: </strong>
          {user.name}
        </p>
        <p>
          <strong>Pais: </strong>
          {user.pais}
        </p>
        <p>
          <strong>Correo: </strong>
          {user.correo}
        </p>
      </div>
    );
  }
}


export default ItemUser