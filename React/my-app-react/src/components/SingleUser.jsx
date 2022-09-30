import React from "react";
import "./Styles/ItemUser.css";
import propTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios";
const useStyle = makeStyles({
  cardUser: {
    maxWidth: 500,
    margin: "8px auto",
    allignItems: "center",
    display: "flex",
  },

  cardMedia: {
    flex: 1,
  },
  carContent: {
    flex: 2,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between ",
  },
});

export const SingleUser = ({ name, picture, location, email, phone }) => {
  const classes = useStyle();

  return (
    <Card className={classes.cardUser}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image={picture.large}
      />
      <CardContent className={classes.carContent}>
        <Typography variant="body1">
          <strong>Nombre: </strong>
          {name.first}
        </Typography>
        <Typography variant="body1">
          <strong>Pais: </strong>
          {location.country}
        </Typography>
        <Typography variant="body1">
          <strong>Correo: </strong>
          {email}
        </Typography>
        <Typography variant="body1">
          <strong>Telefono: </strong>
          {phone}
        </Typography>
      </CardContent>
    </Card>
  );
};

/* .ItemUserpropTypes = {
  user: propTypes.shape({
    name: propTypes.string,
    pais: propTypes.string,
    correo: propTypes.string.isRequired,
  }),
};

ItemUser.defaultProps = {
  user: {
    name: " Nombre Default",
    pais: "Pais Default",
    correo: " Correo Default",
  },
};
 */
export default SingleUser;
