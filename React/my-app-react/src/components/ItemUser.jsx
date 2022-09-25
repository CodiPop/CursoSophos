import React from "react";
import "./Styles/ItemUser.css";
import propTypes from "prop-types";
const user = {
  name: "Angela",
  pais: "Colombia",
  correo: "moralessa@uninorte.edu.co",
};
class ItemUser extends React.Component {
  state = {};

  render() {
    //const{name,pais,correo} = user;
    const{name,pais,correo} = this.props.user;
    console.log(name);
    return (
      <div className="detail">
       <p>
          <strong>Nombre: </strong>
          {name}
        </p>
        <p>
          <strong>Pais: </strong>
          {pais}
        </p>
        <p>
          <strong>Correo: </strong>
          {correo}
        </p> 
      </div>
    );
  }
}

ItemUser.propTypes = {
  user : propTypes.shape({
    name: propTypes.string,
    pais: propTypes.string,
    correo: propTypes.string.isRequired
    
  })
}

ItemUser.defaultProps = {
  user: {
    name:" Nombre Default",
    pais: "Pais Default",
    correo:" Correo Default"
  }

}


export default ItemUser