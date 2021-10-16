import React from 'react';
import { Avatar } from 'antd';

const FollowedTraderProfile = (props) => {
    return (
        <>
            <div className="Trader bg-white R25 p-2">
                <div className="d-inline-flex pt-2 mx-auto">
                    <Avatar size="large" className="my-auto" icon={<img src={props.trader.img} alt="" width="25%"></img>} />
                    <div className="F14-3v my-auto">
                        <p className="my-auto ms-2 Font14 fw-bold">{props.trader.Name}</p>
                        <p className="my-auto ms-2 Font14">{props.trader.type}</p>
                    </div>
                </div>
                <div className="p-2 mt-3">
                    <div className="d-flex">
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 Green fw-bold">{props.trader.earned}</p>
                            <p className="Font14 m-0">Profit</p>
                        </div>
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 Green fw-bold">{props.trader.totalPNL}</p>
                            <p className="Font14 m-0">Total PnL</p>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="d-flex">
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{props.trader.OpnPositions}</p>
                            <p className="Font14 m-0">Total Opened Positions</p>
                        </div>
                        <div className="me-auto w-50">
                            <p className="Font14 m-0 fw-bold">{props.trader.Followers}</p>
                            <p className="Font14 m-0">No. of Active Traders</p>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="d-flex">
                        <div className="me-auto w-50 pe-2">
                            {!props.trader.Copying?<button type="button" className="Gradient Round border-0 w-100 text-white py-1 F15v-07v">AUTO COPY</button>:
                            <button type="button" className={`Bg-Nobel Round border-0 w-100 text-white py-1 F15v-07v`}>STOP COPING</button>}
                        </div>
                        <div className="me-auto w-50 ps-2">
                            {!props.trader.Follow?<button type="button" className="Gradient Round border-0 w-100 text-white py-1 F15v-07v">FOLLOW</button>:
                            <button type="button" className="Bg-Nobel Round border-0 w-100 text-white py-1 F15v-07v">UNFOLLOW</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FollowedTraderProfile;