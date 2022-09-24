import React from 'react'
import ItemUser from "./ItemUser";
import Title from "./Title";

const data = {
  name: "Santiago",
  pais: "Colombia",
  correo: "sguerreroa@uninorte.edu.co"
};

const App = () => {
  return (
    <React.Fragment>

    <Title  />
    <ItemUser user={undefined}/>
    </React.Fragment>
  )
}

export default App