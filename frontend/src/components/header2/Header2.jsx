import "./Header2.scss"
import { Link } from "react-router-dom"
import { navigation } from "../../constants"
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Header2 = () => {
    return (
        <div className="header2">
            <button className="hamburger-icon">
            </button>
            <div className={`cable`}>
                {navigation.map((item) => (
                    <Link className="buttons" key={item.id} to={item.url} onClick={item.onclick}>
                        {item.title}
                        <span className="gradient-underline"></span>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default Header2



