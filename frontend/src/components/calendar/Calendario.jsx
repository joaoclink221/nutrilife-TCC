import "./Calendar.scss"
import { Link } from "react-router-dom"
import { navigation } from "../../constants"
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
