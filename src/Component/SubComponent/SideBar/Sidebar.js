import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"
import { LaptopOutlined, UserOutlined, TeamOutlined, RiseOutlined, SettingOutlined } from '@ant-design/icons';

const Sidebar = () => {
    return (
        <>
            {/* <Sticky
                containerSelectorFocus="#containerSelectorFocus"
                offsetTop={20}
                stickyEnableRange={[768, Infinity]}> */}
            <nav className="main-menu">
                <ul className="Height85">
                    <li className="has-subnav list1">
                        <NavLink to="/dashboard">
                            <div className="Grey p1_5">
                                <LaptopOutlined style={{ fontSize: "x-large" }} />
                                {/* <i className="fa fa-2x"><img src={dashboard} alt="" className="image"></img></i> */}
                            </div>
                            <span className="nav-text pl-2 Purple text-center font-weight-bold">
                                Dashboard
                            </span>
                        </NavLink>

                    </li>
                    <li className="has-subnav mt-4 list2">

                        <NavLink to={localStorage.getItem('type') == 'Trader' ? "/Account/Feed" : "/Account/traders_followed"} className={`${window.location.href.includes("/Account/") ? "active" : ""}`}>
                            <div className="Grey p1_5">
                                <UserOutlined style={{ fontSize: "x-large" }} />
                            </div>
                            <span className="nav-text pl-2 Purple text-center font-weight-bold">
                                Account
                            </span>
                        </NavLink>

                    </li>
                    <li className="has-subnav mt-4 list3">
                        <NavLink to="/Traders/Search" className={`${window.location.href.includes("/Trader") ? "active" : ""}`}>
                            <div className="Grey p1_5">
                                <TeamOutlined style={{ fontSize: "x-large" }} />
                            </div>
                            <span className="nav-text pl-2 Purple text-center font-weight-bold">
                                Traders
                            </span>
                        </NavLink>

                    </li>
                    <li className="has-subnav mt-4 list4">
                        <NavLink to="/charts">
                            <div className="Grey p1_5">
                            <RiseOutlined  style={{ fontSize: "x-large" }} />
                            </div>

                            <span className="nav-text pl-2 Purple text-center font-weight-bold">
                                Charts
                            </span>
                        </NavLink>
                    </li>
                    <li className="has-subnav mt-4 list4 END">
                        <NavLink to="/Account_Setting/Profile">
                            <div className="Grey p1_5">
                            <SettingOutlined  style={{ fontSize: "x-large" }} />
                            </div>

                            <span className="nav-text pl-2 Purple text-center font-weight-bold">
                                Setting
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* </Sticky> */}
        </>
    );
};

export default Sidebar;