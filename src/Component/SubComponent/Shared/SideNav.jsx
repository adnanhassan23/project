import React from 'react';
import { NavLink } from "react-router-dom"

const SideNavOption = (props) => {
    return (
        <>
            <div className="my-3 " >
                <div className="Gradient-05 R25 overflow-hidden" id="myDIV">
                    <NavLink className="d-block ps-3 Navi" to={window.location.href.includes("Trader")?`/Trader/${props.id}/Feed`:'/Account/Feed'}>
                        <button className="col-12 py-3 btn border-0 text-white fs-initial">
                            Feed
                        </button>
                    </NavLink>

                    <NavLink className="d-block ps-3 Navi" to={window.location.href.includes("Trader")?`/Trader/${props.id}/Position`:'/Account/Position'}>
                        <button className="col-12 py-3 btn border-0 text-white fs-initial">
                            Positions
                        </button>
                    </NavLink>

                    <NavLink className="d-block ps-3 Navi" to={window.location.href.includes("Trader")?`/Trader/${props.id}/stats`:'/Account/stats'}>
                        <button className="col-12 py-3 btn border-0 text-white fs-initial">
                            Stats
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default SideNavOption;