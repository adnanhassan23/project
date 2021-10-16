import React from 'react';
import Sidebar from '../../../../SubComponent/SideBar/Sidebar';
import ProfileDetail from '../ProfileDetail';
import Setting from '../SettingOption';
import PositionsTable from "./PositionsTable"
import PositionData from "./Data"

const Positions = () => {
    return (
        <>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="container-fluid" id="containerSelectorFocus" style={{ paddingLeft: "60px" }}>
                    <div className="col-11 col-sm-11 mx-auto">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mx-auto">
                                <div className="box ">
                                    <ProfileDetail />
                                </div>
                                <Setting />
                            </div>
                            <div className="col-12 col-lg-8 GreyBack R25 py-3 mt-3 mt-lg-0">
                                <div className="">
                                    <p className="text-center ls-3" >OPEN POSITIONS</p>
                                </div>
                                <div className="C-Table">
                                    <PositionsTable data={PositionData.OpnPositions} />
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 GreyBack R25 py-3 ms-auto mt-3">
                                <div className="">
                                    <p className="text-center ls-3" >CLOSED POSITIONS</p>
                                </div>
                                <div className="C-Table">
                                    <PositionsTable data={PositionData.ClosedPositions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Positions;