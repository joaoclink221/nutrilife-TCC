import React from 'react'
import "./Calendar.scss"
const Calendario = () => {
    return (
        <nav className="navbar  navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Calendario
