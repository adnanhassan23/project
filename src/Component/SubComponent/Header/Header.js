import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from "../../../Assets/img/logo.svg"
import notificationIcon from "../../../Assets/img/notificationIcon.png"
import profilePic from "../../../Assets/img/ProfilePic.png"
import Button from '../../atoms/Button';
import "./Header.css"

const Header = (props) => {
    const changeMode = () => {
        // $('#root').addClass('dark-mode')
        document.documentElement.classList.toggle('dark-mode')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light pt-4">
                <div className="container-fluid">
                    <NavLink className="navbar-brand AntiInvert w-25" to="/home"><img className="Logo w-100" style={{ maxWidth: "200px" }} src={logo} alt="Logo" /> </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" id="searchField" />
                            </div>
                        </form>
                        <div className="form-group switch px-4">
                            <div className="form-check form-switch pt-2 px-0 d-table mx-auto">
                                <input className="form-check-input m-0" onChange={changeMode} type="checkbox" id="flexSwitchCheckDefault" />
                            </div>
                            <label className="custom-control-label">Light Mode</label>
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {props.isAuthenticated ? <>
                                <li className="mx-3">
                                    <NavLink to="/Notifications"><img src={notificationIcon} className="" alt="Notification" /></NavLink>
                                </li>
                                <li className="Gradient d-flex p-2 mx-3 rounded-pill" style={{ minWidth: "300px" }}>
                                    <img src={profilePic} className="" alt="Profile" />
                                    <div className="my-auto ps-2">
                                        <p className="mb-0 text-white">your name</p>
                                        <p className="mb-0 text-white">BTC 0.0356402</p>
                                    </div>
                                </li>
                            </> :
                                <>
                                    <li className="m-2 HalfScreen">
                                        <Button value="REGISTER" Link="/Register" />
                                    </li>
                                    <li className="m-2 HalfScreen">
                                        <Button value="LOG IN" Link="/Login" />
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;