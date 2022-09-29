import { Box, Typography } from '@mui/material'
import { Container} from '@mui/system'
import React from 'react'
import ItemUser from '../components/ItemUser'
import Title from '../components/Title'
import { makeStyles } from '@material-ui/core/styles'
import Count from '../components/Count'
const data = {
    name: "Santiago",
    pais: "Colombia",
    correo: "sguerreroa@uninorte.edu.co"
  }

  const useStyles = makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-evenly",
        margin:"24px 8 px",
        height:"73.5vh"

        
    }
  })

const Home = () => {
    const classes = useStyles();
  return (
    <React.Fragment>
    
    <Box className={classes.container}>

    <Container maxWidth="md" className={classes.container}>
    <Title text="Bienvenido User Random"/>
    <ItemUser user={data}/>
    <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
    
    </Container>

    </Box>

    </React.Fragment>

  )
}

export default Home