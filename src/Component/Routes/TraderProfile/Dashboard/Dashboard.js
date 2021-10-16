import React from 'react';
import Sticky from "wil-react-sticky";
import TraderData from "./TraderData"
import Sidebar from '../../../SubComponent/SideBar/Sidebar';
import PersonalInfo from "./PersonalInfo"
import LatestNews from '../../../SubComponent/Shared/LatestNews'
import NewsFeed from '../../../SubComponent/Shared/NewsFeed'
import Returns from '../../../SubComponent/Shared/Returns'
import Sponsored from '../../../SubComponent/Shared/Sponsored'
import PostFeed from '../../../SubComponent/Shared/PostFeed';
import SponsoredFooter from '../../../SubComponent/SponsoredFooter/SponsoredFooter'

const TraderDashboard = () => {
    return (
        <>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="container Dashboard" id="containerSelectorFocus" style={{ paddingLeft: "60px" }}>
                    <div className="row">
                        <div className="col-md-4 col-xl-3 Top30">
                            <Sticky
                                containerSelectorFocus="#containerSelectorFocus"
                                offsetTop={20}
                                stickyEnableRange={[768, Infinity]}
                            >
                                <div className="box ">
                                    <PersonalInfo Profile={TraderData.Profile} />
                                    <LatestNews News={TraderData.News} />
                                </div>
                            </Sticky>
                        </div>
                        
                        <div className="col-md-8 col-xl-6">
                            <div className="box">
                                <PostFeed Profile={TraderData.Profile} />
                                <NewsFeed Feed={TraderData.Feed} />
                            </div>
                        </div>

                        <div className="col-xl-3 Sponsored">
                            <Sticky
                                containerSelectorFocus="#containerSelectorFocus"
                                offsetTop={20}
                                stickyEnableRange={[768, Infinity]}
                            >
                                <div className="box">
                                    <Returns Returns={TraderData.Returns} />
                                    <Sponsored Sponsored={TraderData.Sponsored} />
                                </div>
                                
                            </Sticky>
                            
                        </div>
                        
                    </div>
                </div>
                <SponsoredFooter />

            </div>
        </>
    );
}

export default TraderDashboard;