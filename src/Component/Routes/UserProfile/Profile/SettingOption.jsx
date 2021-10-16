import React from 'react';
import { NavLink } from "react-router-dom"

const Setting = () => {
    return (
        <>
            <div className="mt-4 " >
                <div className="Gradient-05 R25 overflow-hidden" id="myDIV">
                    <NavLink className="d-block ps-3 Navi" to="/Account/traders_followed">
                        <button className="col-12 py-3 btn border-0 text-white fs-initial">
                            Traders Followed
                        </button>
                    </NavLink>

                    <NavLink className="d-block ps-3 Navi" to="/Account/Positions">
                        <button className="col-12 py-3 btn border-0 text-white fs-initial">
                            Positions
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Setting;