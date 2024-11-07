 import "./landing.scss"
 import { LandingHeader } from "../../constants"
 const HeaderLanding = () => {
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
  export default HeaderLanding