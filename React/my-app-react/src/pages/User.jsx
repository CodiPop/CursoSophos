import React from 'react'
import ItemUser from '../components/ItemUser'
import {useParams} from "react-router-dom"
import userList from '../data'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/material'

const useStyles = makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-evenly",
        margin:"24px 8 px",
        height:"73.5vh"

        
    }
  })

export const User = () => {

    const {id}= useParams();
    const singleUser = userList.find((user) => user.id == id);

    const classes = useStyles();
  return (
    <Box className={classes.container}>
        <ItemUser user={singleUser}/>
    </Box>
    
  )
}

export default User