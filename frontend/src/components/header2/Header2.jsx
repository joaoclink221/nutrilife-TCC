import "./Header2.scss"
import { Link } from "react-router-dom"
import { navigation } from "../../constants"
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="header2">
            <button className="hamburger-icon" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className={`cable ${isOpen ? "open" : ""}`}>
                {navigation.map((item) => (
                    <Link className="buttons" key={item.id} to={item.url} onClick={() => setIsOpen(false)}>
                        {item.title}
                        <span className="gradient-underline"></span>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default Header2



