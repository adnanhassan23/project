import React, { useState } from "react";
import Sticky from "wil-react-sticky";
import { Upload } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import profile_photo_avatar from "../../../Assets/img/dp1.png"
import Sidebar from '../../SubComponent/SideBar/Sidebar';
import SideNavOption from './SideNav';
import UploadComponent from "../../SubComponent/Shared/UploadComponent";


const ProfileSetting = () => {
    const initialstate = {
        profile_photo: profile_photo_avatar,
        Color: "",
        userName: "",
        bio: ""
    }

    const [DetailData, setDetailData] = useState(initialstate);
    // eslint-disable-next-line
    const { profile_photo, userName, Color, bio } = DetailData;

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

    const PhotoUpload = (info) => {
        let fileList = [...info.fileList];
        fileList.forEach(function (file, index) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setDetailData({
                    ...DetailData,
                    profile_photo: e.target.result
                })
            };
            reader.readAsDataURL(file.originFileObj);
        });
    }

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
                                    <SideNavOption />
                                </div>
                            </Sticky>
                        </div>
                        <div className="col-lg-8 col-xl-9 GreyBack R25 p-3 p-lg-4 mt-3 mt-lg-0">
                            <h6 className="text-center p-3 Font20">Profile</h6>
                            <div className="bg-white p-4 p-lg-5 R25">
                                <div className="row">
                                    <div className="col-12 col-lg-5 mx-auto mb-3">
                                        <p>Profile Picture:</p>
                                        <div className="d-inline-flex">
                                            <div className="">
                                                <Avatar src={profile_photo} className="d-block" />
                                            </div>
                                            <UploadComponent profile_photo={profile_photo} Upload={PhotoUpload} >
                                                <button className="my-auto Font2v border-0 mx-4 R25 px-3 py-2">UPLOAD NEW PHOTO</button>
                                            </UploadComponent>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-7 mx-auto">
                                        <p>Username: <span className="Purple">Your Username</span></p>
                                        <div className="row LightGrey R25">
                                            <p className=" p-3 m-0 col-5 Font2v">Change Username:</p>
                                            <input type="text"
                                                className="border-0 bg-Grey px-3 text-white R25 center col-7"
                                                placeholder="New Username"
                                                name="userName"
                                                value={userName}
                                                onChange={onHandleChange}></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-3">

                                    <div className="my-auto px-0 col-lg-7 col-md-12 col-12 R25 Font14">
                                        <div className="row">
                                                <div className="col-12 col-sm-3">
                                                    <p className="my-3">Apperance: </p>
                                                </div>

                                                <ul className="combineButton RadioToButton d-inline-flex px-0 my-1 col-12 col-sm-9">
                                                    <li className="w-50">
                                                        <input
                                                            type="radio"
                                                            className="Gradient"
                                                            id="Dark"
                                                            name="Color"
                                                            value="Dark"
                                                            onClick={handleChange} />
                                                        <label htmlFor="Dark" className="mb-0 Bold text-center p-3">Dark</label>
                                                    </li>
                                                    <li className="w-50">
                                                        <input
                                                            className="Gradient"
                                                            type="radio"
                                                            id="Light"
                                                            name="Color"
                                                            value="Light"
                                                            onClick={handleChange} />
                                                        <label htmlFor="Light" className=" mb-0 Bold text-center p-3">Light</label>
                                                    </li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                                <div>
                                    <label>Bio:</label>
                                    <textarea rows="5"
                                        className="col-12 R25 bg-LightRed resizeNone p-4 border-0"
                                        placeholder="Write a description about yourself."
                                        name="bio"
                                        value={bio}
                                        onChange={onHandleChange}>
                                    </textarea>
                                </div>
                                <div className="d-block mx-auto pt-5">
                                    <button className="d-block mx-auto border-0 Gradient text-white p-3 R25">
                                        SAVE
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileSetting;