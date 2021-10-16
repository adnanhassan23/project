import React, { useState } from 'react';
import "./GraphCss.css"
import Sidebar from '../../SubComponent/SideBar/Sidebar';
import TradingViewChart from './TradingViewChart';
import Footer from '../../SubComponent/Footer/Footer'

const UserGraph = () => {

    return (
        <React.Fragment>
            <div className="container-fluid mt-3 Height85">
                <Sidebar />
                <div className="maxWidth" id="container" style={{ paddingLeft: "60px" }}>

                    <div className="row mx-0">
                        <div className="bg-LightRed col-12 mx-auto R25 p-4 h-auto order-2 order-lg-1 mt-3 mt-lg-0">
                            <TradingViewChart />
                        </div>
                        </div>

             
                </div>
            </div>
            
            <Footer />
        </React.Fragment>
    )
}

export default UserGraph;