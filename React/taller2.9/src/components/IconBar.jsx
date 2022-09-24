import React from 'react'
import { useState } from 'react';
import "./styles/IconBar.css"
import { IoPersonOutline,IoMailOutline,IoNewspaperOutline,IoMapOutline,IoPhonePortraitOutline,IoLockClosedOutline } from "react-icons/io5";


export const IconBar = () => {
    const [state, setState] = useState(false);

    const toggle= () =>{
        setState(!state);
    }
  return (
    <React.Fragment>
        <div className='bar'>

        <button className={ (state ? "toggleG":"btn")} onClick= {toggle}><IoPersonOutline className='icono'></IoPersonOutline></button>
        <button className="btn"><IoMailOutline className='icono'></IoMailOutline></button>
        <button className='btn'><IoNewspaperOutline className='icono'></IoNewspaperOutline></button>
        <button className='btn'><IoMapOutline className='icono'></IoMapOutline></button>
        <button className='btn'><IoPhonePortraitOutline className='icono'></IoPhonePortraitOutline></button>
        <button className='btn'><IoLockClosedOutline className='icono'></IoLockClosedOutline></button>

        </div>
        
        
        



    </React.Fragment>
  )
}
