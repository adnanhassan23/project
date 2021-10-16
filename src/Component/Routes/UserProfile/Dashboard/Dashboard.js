import React from 'react';
import Sticky from "wil-react-sticky";
import Sidebar from '../../../SubComponent/SideBar/Sidebar';
import PersonalInfo from "./PersonalInfo";
import LatestNews from "../../../SubComponent/Shared/LatestNews";
import NewsFeed from "../../../SubComponent/Shared/NewsFeed";
import Returns from "../../../SubComponent/Shared/Returns";
import Sponsored from "../../../SubComponent/Shared/Sponsored";
import "./dashboard.css"
import UserData from './UserData'
import Signals from './Signal';

export default class Dashboard extends React.Component {
    render() {
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
                                        <PersonalInfo Profile={UserData.Profile} />
                                        <LatestNews News={UserData.News} />
                                    </div>
                                </Sticky>
                            </div>
                            <div className="col-md-8 col-xl-6">
                                <div className="box">
                                    <Signals Signal={UserData.Signal} />
                                    <NewsFeed Feed={UserData.Feed} />
                                </div>
                            </div>

                            <div className="col-xl-3 Sponsored">
                                <Sticky
                                    containerSelectorFocus="#containerSelectorFocus"
                                    offsetTop={20}
                                    stickyEnableRange={[768, Infinity]}
                                >
                                    <div className="box">
                                        <Returns Returns={UserData.Returns} />
                                        <Sponsored Sponsored={UserData.Sponsored} />
                                    </div>
                                </Sticky>
                            </div>
                        </div>
                    </div>
                    {/* <img
                        src="https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        style={{ marginTop: 100 }}
                    /> */}
                </div>
            </>
        );
    }
}