import React, { useState } from "react";
import Sticky from "wil-react-sticky";
import Sidebar from '../../SubComponent/SideBar/Sidebar';
import SideNavOption from './SideNav';
const Security = () => {
    const initialstate = {
        Color: "",
        password: "",
        cnfrmPass: "",
        email: ""
    }

    const [DetailData, setDetailData] = useState(initialstate);
    // eslint-disable-next-line
    const { password, cnfrmPass, email, Color } = DetailData;

    const onHandleChange = (event) => {
        const { name, value } = event.target
        setDetailData({
            ...DetailData,
            [name]: value
        })
    }

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        if (type === "checkbox") {
            setDetailData({
                ...DetailData,
                [name]: checked
            })
            var a = document.getElementsByClassName('chkbox')
            // eslint-disable-next-line
            var counter = 0;
            for (var count = 0; count < a.length; count++) {
                if (a[count].checked === true) {
                    counter++
                }

            }
        }
        else {
            setDetailData({
                ...DetailData,
                [name]: value
            })
        }
    }

    return (
        <div>
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
                                    <SideNavOption />
                                </div>
                            </Sticky>
                        </div>

                        <div className="col-lg-8 col-xl-9 GreyBack R25 p-3 p-lg-4 mt-3 mt-lg-0">
                            <h6 className="text-center p-3 Font20">Security</h6>
                            <div className="bg-white p-4 p-lg-5 R25">
                                <div className="row">
                                    <div className="col-12 col-sm-5 col-md-12 col-lg-5 mx-auto mb-3">
                                        <label>e-Mail Address:</label>
                                        <div className="row LightGrey R25 mt-3">
                                            <p className="m-0 col-5 Font2v my-auto">Change e-Mail:</p>
                                            <input type="text"
                                                className="border-0 bg-Grey px-3 text-white R25 center col-7 customInput"
                                                placeholder="new e-Mail"
                                                name="email"
                                                value={email}
                                                onChange={onHandleChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-5 col-md-12 col-lg-5 mx-auto mb-3">
                                        <label>Password:</label>
                                        <div className="row LightGrey R25 mt-3">
                                            <p className="m-0 col-5 Font2v my-auto">Change Password:</p>
                                            <input type="password"
                                                className="border-0 bg-Grey px-3 text-white R25 center col-7 customInput"
                                                placeholder="new password"
                                                name="password"
                                                value={password}
                                                onChange={onHandleChange}></input>
                                        </div>
                                        <div className="row R25 mt-4">
                                            <input type="password"
                                                className="border-0 bg-Grey text-white R25 center col-7 ms-auto customInput"
                                                placeholder="confirm new password"
                                                name="cnfrmPass"
                                                value={cnfrmPass}
                                                onChange={onHandleChange}></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="row my-3 col-10 mx-auto">
                                            <label className="">2 FA:</label>
                                            <div className="my-auto px-0 col-lg-12 col-md-12 col-12 R25 Font14">
                                                <ul className="w-100 combineButton RadioToButton d-inline-flex px-0 my-1">
                                                    <li className="w-50">
                                                        <input
                                                            type="radio"
                                                            className="Gradient"
                                                            id="Disabled"
                                                            name="Color"
                                                            value="Disabled"
                                                            onClick={handleChange} />
                                                        <label htmlFor="Disabled" className=" mb-0 Bold text-center p-3">Disabled</label>
                                                    </li>
                                                    <li className="w-50">
                                                        <input
                                                            className="Gradient"
                                                            type="radio"
                                                            id="Enabled"
                                                            name="Color"
                                                            value="Enabled"
                                                            onClick={handleChange} />
                                                        <label htmlFor="Enabled" className=" mb-0 Bold text-center p-3">Enabled</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block mx-auto pt-5">
                                    <button className="col-3 d-block mx-auto border-0 Gradient text-white p-3 R25">
                                        SAVE
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Security;
