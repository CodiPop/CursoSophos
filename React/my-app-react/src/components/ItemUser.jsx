import React from "react";
import "./Styles/ItemUser.css";
import propTypes from "prop-types";
import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  cardUser:{
    maxWidth:500,
    margin:"8px auto",
    allignItems:"center",
    display:"flex"
  },

  cardMedia:{
    flex:1
  },
  carContent:{
    flex:2
  }
})





export const ItemUser = (props) => {
  const classes = useStyle();
    //const{name,pais,correo} = user;
    const{name,pais,correo} = props.user;
    console.log(name);
  return (
    <Card className={classes.cardUser}>
    <CardMedia className={classes.cardMedia} component="img" image="/logo192.png"  />
    <CardContent className={classes.carContent}>
    
    <Typography variant="body1">
      <strong>Nombre: </strong>
      {name}
    </Typography>
    <Typography variant="body1">
      <strong>Pais: </strong>
      {pais}
    </Typography>
    <Typography variant="body1">
      <strong>Correo: </strong>
      {correo}
    </Typography>
    </CardContent>

  </Card>
  )
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