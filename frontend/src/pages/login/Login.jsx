import "./login.scss";
import { Link } from "react-router-dom";
import {UserRound,KeySquare} from "lucide-react"


export default function Login() {
  return (
    <div className="zeus">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
          <UserRound className="icon"/>
          
        </div>
        <div className="input-box">
          <input type="text" placeholder="Password" required />
          <KeySquare className="icon"/>

        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        
      </form>
    </div>
    </div>
  )
}
