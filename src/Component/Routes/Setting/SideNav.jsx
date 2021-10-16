import React from 'react';
import { NavLink } from "react-router-dom"

const SideNavOption = (props) => {
    return (
        <>
            <div className="my-3 " >
                <div className="Gradient-05 R25 overflow-hidden" id="myDIV">
                    <NavLink className="d-block ps-3 Navi" to="/Account_Setting/Profile">
                        <button className="col-12 py-3 btn border-0 text-white fs-initial">
                            Profile
                        </button>
                    </NavLink>

                    <NavLink className="d-block ps-3 Navi" to="/Account_Setting/Security">
                        <button className="col-12 py-3 btn border-0 text-white fs-initial">
                            Security
                        </button>
                    </NavLink>

                    {localStorage.getItem('type') == "Trader" && (
                        <NavLink className="d-block ps-3 Navi" to="/Account_Setting/Social_Links">
                            <button className="col-12 py-3 btn border-0 text-white fs-initial">
                                Social
                            </button>
                        </NavLink>
                    )}


                    <NavLink className="d-block ps-3 Navi" to="/Account_Setting/Connect_Exchange">
                        <button className="col-12 py-3 btn border-0 text-white fs-initial">
                            Connect an Exchange
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default SideNavOption;