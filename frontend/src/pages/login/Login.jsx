import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
      <div className="card">
        <div className="flex min-h-full flex-col justify-center">
          <div className="mx-auto w-full max-w-md text-center flex flex-col items-center">
            <h2 className="title"> Login</h2>
           
          </div>
          <div className="mt-8 mx-auto w-full max-w-md">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="input-label">
                Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    type="email"
                    className="input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="input-label">
                Senha
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    required
                    autoComplete="password"
                    type="password"
                    className="input"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="checkbox-label">
                    lembre-se de mim
                  </label>
                </div>
              </div>
              <div>
                <button className="button">
                  Entrar
                </button>
              </div>
              <div className="footer-text">
                <div className="relative">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
