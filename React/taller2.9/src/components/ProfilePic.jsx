import React from 'react';
import image from "./Images/crispeta.jpg"
import "./styles/ProfilePic.css"
export const ProfilePic = () => {
  return (
    <React.Fragment>
    <div className='container-div'>
        <img className="edit" src={image} height={200} width={200} />
    </div>
    
    


    </React.Fragment>


  )
}


export default ProfilePic