import React from 'react';
import Sticky from "wil-react-sticky";
import Sidebar from '../../../../../SubComponent/SideBar/Sidebar';
import SideNavOption from '../../../../../SubComponent/Shared/SideNav';
import TraderProfileDetail from '../../../../../SubComponent/Shared/TradProfDetail';
import TraderData from "../../../../../SubComponent/Shared/TraderData"
import NewsFeed from '../../../../../SubComponent/Shared/NewsFeed';
import PostFeed from '../../../../../SubComponent/Shared/PostFeed';

const TraderProfile = () => {
    return (
        <>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="container" id="containerSelectorFocus" style={{ paddingLeft: "60px" }}>
                    <div className="row">
                        <div className="col-md-4 col-xl-3">
                            <Sticky
                                containerSelectorFocus="#containerSelectorFocus"
                                offsetTop={20}
                                stickyEnableRange={[768, Infinity]}
                            >
                                <div className="box ">
                                    <TraderProfileDetail Profile={TraderData.Profile} />
                                    <SideNavOption id={TraderData.Profile.id} />
                                </div>
                            </Sticky>
                        </div>
                        <div className="col-md-8 col-xl-9">
                            <div className="box">
                                <NewsFeed Feed={TraderData.Feed} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TraderProfile;