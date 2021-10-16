import React from 'react';
import { Avatar } from 'antd';
import { LineProgressBar } from '@frogress/line'

const TraderProfileDetail = (props) => {
    return (
        <>
            <div className="GreyBack R25 p-3">
                <div className="d-inline-flex pt-2 mx-auto">
                    <Avatar size="large" className="my-auto" icon={<img src={props.Profile.img} alt="" width="100%"></img>} />
                    <div className="F14-3v my-auto">
                        <p className="my-auto ms-2 F14-3w fw-bold">{props.Profile.Name} </p>
                        <p className="my-auto ms-2 F14-3w">User</p>
                    </div>
                </div>
                <p className="Font14 mt-2 mb-0 fw-bold Purple px-3">{props.Profile.totalPNLper}%</p>
                <LineProgressBar
                    percent={props.Profile.totalPNLper}
                    progressColor="linear-gradient(to right, #00DDC6 60%, #00AEE1)"
                    containerColor="#C8C8C8"
                    rounded={25}
                    height={6}
                />
                <p className="Font14 m-0 px-3 opacity-50">Total in Today's PnL</p>
                <div className="pt-2">
                    <div className="d-flex">
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{props.Profile.TodayPNLper}</p>
                            <p className="Font14 m-0">Todays PnL Rate</p>
                        </div>
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{props.Profile.totlPositnOpn}</p>
                            <p className="Font14 m-0">Total Positions Opened</p>
                        </div>
                    </div>
                </div>
                <div className="pt-2">
                    <div className="d-flex">
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{props.Profile.No_of_Copiers}</p>
                            <p className="Font14 m-0">No. of Copiers</p>
                        </div>
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{props.Profile.RankNo}</p>
                            <p className="Font14 m-0">Ranked Number</p>
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <div className="d-flex">
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{props.Profile.newCopier}</p>
                            <p className="Font14 m-0">New Copier This Week</p>
                        </div>
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{props.Profile.followers}</p>
                            <p className="Font14 m-0">No. of Followers</p>
                        </div>
                    </div>
                </div>
                <p className="mt-3 text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                        <div className="btn-grad w-100 h-100 py-2 px-3 d-grid my-auto">
                            <div className="my-auto d-block">
                                <p className="mb-0 text-white fs-xSmall">Auto Copy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 ps-lg-0">
                        <div className="btn-grad w-100 h-100 py-2 px-3 d-grid my-auto">
                            <div className="my-auto d-block">
                                <p className="mb-0 text-white fs-xSmall">Follow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TraderProfileDetail;