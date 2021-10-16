import React from 'react';
import UserData from "./Trader_Followed/Data"
import CopyIcon from "../../../../Assets/img/CopyIcon.png";
import { Avatar } from 'antd';
import { LineProgressBar } from '@frogress/line'


const ProfileDetail = () => {
    return (
        <>
            <div className="GreyBack R25 p-3">
                <div className="d-inline-flex pt-2 mx-auto">
                    <Avatar size="large" className="my-auto" icon={<img src={UserData.Profile.img} alt="" width="100%"></img>} />
                    <div className="F14-3v my-auto">
                        <p className="my-auto ms-2 F14-3w fw-bold">{UserData.Profile.firstName}  {UserData.Profile.lastName}</p>
                        <p className="my-auto ms-2 F14-3w">User</p>
                    </div>
                </div>
                <p className="Font14 mt-2 mb-0 fw-bold Purple px-3">{UserData.Profile.totalPNLper}%</p>
                <LineProgressBar
                    percent={UserData.Profile.totalPNLper}
                    progressColor="linear-gradient(to right, #00DDC6 60%, #00AEE1)"
                    containerColor="#C8C8C8"
                    rounded={25}
                    height={6}
                />
                <p className="Font14 m-0 px-3 opacity-50">Total in Today's PnL</p>
                <div className="pt-2">
                    <div className="d-flex">
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{UserData.Profile.dailyPNL}</p>
                            <p className="Font14 m-0">Daily PnL</p>
                        </div>
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{UserData.Profile.totalPNL}</p>
                            <p className="Font14 m-0">All Time PnL</p>
                        </div>
                    </div>
                </div>
                <div className="pt-2">
                    <div className="d-flex">
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{UserData.Profile.tradCop}</p>
                            <p className="Font14 m-0">Trades Copied</p>
                        </div>
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{UserData.Profile.activeTrad}</p>
                            <p className="Font14 m-0">No. of Active Traders</p>
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <div className="d-flex">
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{UserData.Profile.fundedAccount}</p>
                            <p className="Font14 m-0">Account Funds</p>
                        </div>
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{UserData.Profile.followers}</p>
                            <p className="Font14 m-0">Followers</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                        <div className="btn-grad w-100 h-100 py-2 px-3 d-grid my-auto">
                            <div className="my-auto d-block">
                                <p className="mb-0 text-white fs-xSmall">{UserData.Profile.positions}</p>
                                <p className="mb-0 text-white fs-xSmall">Positions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 ps-lg-0">
                        <div className="btn-grad w-100 h-100 py-2 px-3 d-grid my-auto">
                            <div className="my-auto d-block">
                                <p className="mb-0 text-white fs-xSmall">{UserData.Profile.following}</p>
                                <p className="mb-0 text-white fs-xSmall">Traders Followed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 mt-3">
                    <div className="btn-grad d-flex">
                        <p className="fs-xSmall mb-0 text-white w-100" >REFERRAL CODE: 43297954529</p>
                        <i className="fa fa-2x ms-auto"><img src={CopyIcon} alt="" className="image" style={{ width: "auto" }} ></img></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileDetail;