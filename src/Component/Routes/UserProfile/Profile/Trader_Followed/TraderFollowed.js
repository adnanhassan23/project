import React from 'react';
import search from "../../../../../Assets/img/Search.png"
import Sidebar from '../../../../SubComponent/SideBar/Sidebar';
import ProfileDetail from '../ProfileDetail';
import Setting from '../SettingOption';
import UserData from "./Data"
import FollowedTrader from '../../../../SubComponent/Shared/FollowedTraderProfile'

const TraderFollowed = () => {
    return (
        <>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="container-fluid Dashboard" id="containerSelectorFocus" style={{ paddingLeft: "60px" }}>
                    <div className="col-11 col-sm-11 mx-auto">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mx-auto">
                                <div className="box ">
                                    <ProfileDetail />
                                </div>
                                <Setting />
                            </div>
                            <div className="col-12 col-lg-8 GreyBack R25 py-3">
                                <div className="">
                                    <p className="text-center ls-3" >Traders Followed</p>
                                    <p className="px-4" >Keyword:</p>
                                    <input type="text"
                                        name="type"
                                        className="py-2 px-4 ms-4 me-2 customInput bg-white"
                                        placeholder="Type" />
                                    <button type="button" className="btn-grad border-0 pe-2 ms-4 ms-md-2 mt-3 mt-md-0">Search <img src={search} alt="" className="ms-2 w-auto" /> </button>
                                </div>
                                <div className="px-3 mt-3 scroll">
                                    <div className="row">
                                        {UserData.Traders.map((each) => {
                                            return (
                                                <div className="col-12 col-sm-6 col-md-6 col-xl-4 p-2">
                                                    <FollowedTrader key={each.id} trader={each} />
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TraderFollowed;