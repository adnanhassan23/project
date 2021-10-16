import React from 'react';
import Sticky from "wil-react-sticky";
import Sidebar from '../../../../../SubComponent/SideBar/Sidebar';
import SideNavOption from '../../../../../SubComponent/Shared/SideNav';
import TraderProfileDetail from '../../../../../SubComponent/Shared/TradProfDetail';
import TraderData from "../../../../../SubComponent/Shared/TraderData"
import Stats from '../../../../Graph/Stats';

const TraderStats = () => {
    return (
        <>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="container" id="containerSelectorFocus" style={{ paddingLeft: "60px" }}>
                    <div className="row">
                        <div className="col-lg-4 col-xl-3">
                            <Sticky
                                containerSelectorFocus="#containerSelectorFocus"
                                offsetTop={20}
                                stickyEnableRange={[992, Infinity]}
                            >
                                <div className="box ">
                                    <TraderProfileDetail Profile={TraderData.Profile} />
                                    <SideNavOption id={TraderData.Profile.id} />
                                </div>
                            </Sticky>
                        </div>
                        <div className="col-lg-8 col-xl-9 GreyBack R25 py-3 mt-3 mt-lg-0">
                            <div className="box">
                                <Stats />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TraderStats;