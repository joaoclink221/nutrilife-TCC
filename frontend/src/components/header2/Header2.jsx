import "./Header2.scss"
import { Link } from "react-router-dom"
import { navigation, LandingHeader } from "../../constants"
const Header2 = () => {
    return (
        <div className="cable">
            {navigation.map((item) => (
                <Link className="buttons"
                    key={item.id}
                    to={item.url}>
                    {item.title}
                    <span className="gradient-underline"></span>
                </Link>
            ))}
        </div>
    )
}

export default Header2

import React from 'react'

export const HeaderLanding = () => {
  return (
    <div>
        {LandingHeader.map((item) => (
                <Link className="buttons"
                    key={item.id}
                    to={item.url}>
                    {item.title}
                    <span className="gradient-underline"></span>
                </Link>
            ))}
    </div>
  )
}
