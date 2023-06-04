import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate } from '../const/routes'

//Header will not show if .pathname is '/'(Navigate.home, Login page)
const NavbarNest = ({children}) => {

    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        //console.log('Locaton changed', location)
        if(location.pathname === Navigate.home){
            setShowNavbar(false)
        } else if(location.pathname === Navigate.register) {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }, [location])

  return (
    <div>{showNavbar && children}</div>
  )
}

export default NavbarNest